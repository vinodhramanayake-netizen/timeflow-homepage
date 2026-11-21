import { useEffect, useRef, useState, type ReactNode } from "react";

export function LogoCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const targetOffsetRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let rafId = 0;
    let lastTime = performance.now();
    const speedPxPerSec = 44;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const track = trackRef.current;
      const group = firstGroupRef.current;
      if (track && group) {
        const computedGap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap);
        const gap = Number.isFinite(computedGap) ? computedGap : 12;
        const loopWidth = group.offsetWidth + gap;

        if (loopWidth > 0) {
          if (targetOffsetRef.current !== null) {
            const diff = targetOffsetRef.current - offsetRef.current;
            if (Math.abs(diff) < 0.8) {
              offsetRef.current = targetOffsetRef.current;
              targetOffsetRef.current = null;
            } else {
              offsetRef.current += diff * 0.12;
            }
          } else if (!pausedRef.current) {
            offsetRef.current += speedPxPerSec * dt;
          }

          if (offsetRef.current >= loopWidth) {
            offsetRef.current -= loopWidth;
          } else if (offsetRef.current < 0) {
            offsetRef.current += loopWidth;
          }

          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

          const nextPage = Math.min(2, Math.floor((offsetRef.current / loopWidth) * 3));
          setPage((prev) => (prev === nextPage ? prev : nextPage));
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  function select(index: number) {
    const track = trackRef.current;
    const group = firstGroupRef.current;
    if (!track || !group) return;
    const computedGap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap);
    const gap = Number.isFinite(computedGap) ? computedGap : 12;
    const loopWidth = group.offsetWidth + gap;
    targetOffsetRef.current = (loopWidth * index) / 3;
    setPage(index);
  }

  return (
    <div
      className="logo-carousel"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={() => {
        pausedRef.current = false;
      }}
    >
      <div className="logo-carousel-viewport" aria-label="Example brand logos" tabIndex={0}>
        <div ref={trackRef} className="logo-marquee-track flex gap-[var(--space-12)] w-max will-change-transform">
          <div ref={firstGroupRef} className="shrink-0">
            {children}
          </div>
          <div className="shrink-0" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
      <div className="logo-pagination" aria-label="Brand carousel pages">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show logo group ${index + 1}`}
            aria-pressed={page === index}
            onClick={() => select(index)}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
