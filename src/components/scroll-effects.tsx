import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Shared smooth scroll state so anchor clicks and wheel momentum stay synchronized
const scrollState = {
  targetY: 0,
  currentY: 0,
  rafId: 0 as number,
  isAnimating: false,
  isAnchorScrolling: false,
  cancelAnchor: null as (() => void) | null,
};

function clampScrollY(y: number) {
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  return Math.min(Math.max(0, y), maxScroll);
}

export function smoothScrollToY(destinationY: number, duration = 1050) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamped = clampScrollY(destinationY);

  if (reduced) {
    window.scrollTo(0, clamped);
    return;
  }

  if (scrollState.cancelAnchor) {
    scrollState.cancelAnchor();
  }
  if (scrollState.rafId) {
    cancelAnimationFrame(scrollState.rafId);
    scrollState.rafId = 0;
  }

  const startY = window.scrollY;
  const distance = clamped - startY;
  if (Math.abs(distance) < 1) {
    scrollState.targetY = clamped;
    scrollState.currentY = clamped;
    return;
  }

  let cancelled = false;
  let anchorRaf = 0;
  const startTime = performance.now();

  scrollState.isAnchorScrolling = true;
  scrollState.cancelAnchor = () => {
    cancelled = true;
    scrollState.isAnchorScrolling = false;
    if (anchorRaf) cancelAnimationFrame(anchorRaf);
  };

  const easeInOutQuart = (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

  const step = (now: number) => {
    if (cancelled) return;
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const nextY = startY + distance * easeInOutQuart(progress);

    window.scrollTo(0, nextY);
    scrollState.currentY = nextY;
    scrollState.targetY = nextY;

    if (progress < 1) {
      anchorRaf = requestAnimationFrame(step);
    } else {
      scrollState.isAnchorScrolling = false;
      scrollState.cancelAnchor = null;
      scrollState.currentY = clamped;
      scrollState.targetY = clamped;
    }
  };

  anchorRaf = requestAnimationFrame(step);
}

export function smoothScrollToHash(hash: string) {
  if (!hash.startsWith("#")) return false;
  const id = hash.slice(1);
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;

  const rect = target.getBoundingClientRect();
  const stickyOffset = id === "home" ? 0 : 88;
  const targetTop = Math.max(0, rect.top + window.scrollY - stickyOffset);
  smoothScrollToY(targetTop, 1050);
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
  return true;
}

export function SmoothScrollController() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    scrollState.currentY = window.scrollY;
    scrollState.targetY = window.scrollY;

    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      const diff = scrollState.targetY - scrollState.currentY;
      if (Math.abs(diff) < 0.5) {
        scrollState.currentY = scrollState.targetY;
        window.scrollTo(0, scrollState.currentY);
        scrollState.isAnimating = false;
        scrollState.rafId = 0;
        return;
      }

      const alpha = 1 - Math.exp(-12.5 * dt);
      scrollState.currentY += diff * alpha;
      window.scrollTo(0, scrollState.currentY);
      scrollState.rafId = requestAnimationFrame(tick);
    };

    const startWheelAnimation = () => {
      if (!scrollState.isAnimating) {
        lastTime = performance.now();
        scrollState.isAnimating = true;
        scrollState.rafId = requestAnimationFrame(tick);
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("dialog, .logo-carousel-viewport, [data-native-scroll]")) {
        return;
      }

      // If an anchor transition was running, hand off seamlessly from current scrollY
      if (scrollState.isAnchorScrolling && scrollState.cancelAnchor) {
        scrollState.cancelAnchor();
        scrollState.currentY = window.scrollY;
        scrollState.targetY = window.scrollY;
      }

      event.preventDefault();

      let deltaY = event.deltaY;
      if (event.deltaMode === 1) deltaY *= 32;
      else if (event.deltaMode === 2) deltaY *= window.innerHeight * 0.85;

      const dampedDelta = deltaY * 0.82;
      if (!scrollState.isAnimating) {
        scrollState.currentY = window.scrollY;
        scrollState.targetY = window.scrollY;
      } else {
        // Cancel residual opposite momentum immediately when reversing scroll direction
        const pendingDiff = scrollState.targetY - scrollState.currentY;
        if (pendingDiff !== 0 && Math.sign(dampedDelta) !== Math.sign(pendingDiff)) {
          scrollState.targetY = scrollState.currentY;
        }
      }

      scrollState.targetY = clampScrollY(scrollState.targetY + dampedDelta);
      startWheelAnimation();
    };

    const onNativeScroll = () => {
      if (!scrollState.isAnimating && !scrollState.isAnchorScrolling) {
        scrollState.currentY = window.scrollY;
        scrollState.targetY = window.scrollY;
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      if (smoothScrollToHash(href)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onNativeScroll);
      document.removeEventListener("click", onDocumentClick);
      if (scrollState.rafId) cancelAnimationFrame(scrollState.rafId);
      if (scrollState.cancelAnchor) scrollState.cancelAnchor();
    };
  }, []);

  return null;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  amount?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
  scale = 0.985,
  amount = 0.14,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  const mergedClassName = className ? `scroll-reveal ${className}` : "scroll-reveal";

  if (reduced) {
    return <div className={mergedClassName}>{children}</div>;
  }

  return (
    <motion.div
      className={mergedClassName}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.78,
        delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  offset?: [number, number];
  scaleRange?: [number, number];
}

export function ParallaxLayer({
  children,
  className,
  offset = [-64, 64],
  scaleRange,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], offset);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleRange ?? [1, 1]
  );

  const wrapperClass = className?.includes("absolute")
    ? className
    : className
      ? `relative ${className}`
      : "relative";

  if (reduced) {
    return (
      <div ref={ref} className={wrapperClass}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={wrapperClass}>
      <motion.div
        style={{
          y,
          scale: scaleRange ? scale : undefined,
          willChange: "transform",
        }}
        className="relative size-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
