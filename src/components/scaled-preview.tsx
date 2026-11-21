"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface ScaledPreviewProps {
  width: number;
  maxWidth?: number;
  label: string;
  children: ReactNode;
}

export function ScaledPreview({ width, maxWidth, label, children }: ScaledPreviewProps) {
  const frame = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const resolvedMaxWidth = maxWidth ?? width;
  const maxZoom = resolvedMaxWidth / width;

  useLayoutEffect(() => {
    const container = frame.current;
    const content = canvas.current;
    if (!container || !content || CSS.supports("zoom", "calc(100cqw / 100px)")) return;
    const resize = () => {
      content.style.zoom = String(Math.min(maxZoom, container.clientWidth / width));
    };
    const observer = new ResizeObserver(resize);
    resize();
    observer.observe(container);
    return () => observer.disconnect();
  }, [width, maxZoom]);

  return (
    <div ref={frame} className="scaled-preview" style={{ maxWidth: resolvedMaxWidth }} role="img" aria-label={label}>
      <div
        ref={canvas}
        style={
          {
            width,
            "--preview-width": `${width}px`,
            "--preview-max-zoom": String(maxZoom),
          } as CSSProperties
        }
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
