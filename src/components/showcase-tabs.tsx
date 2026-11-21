"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const labels = ["Time Tracking", "Projects", "Reports"];
interface ShowcaseTabsProps {
  children: ReactNode;
  projects: ReactNode;
  reports: ReactNode;
}

export function ShowcaseTabs({ children, projects, reports }: ShowcaseTabsProps) {
  const panels = [children, projects, reports];
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function changeTab(event: KeyboardEvent<HTMLButtonElement>) {
    const index = { ArrowRight: (selected + 1) % labels.length, ArrowLeft: (selected + labels.length - 1) % labels.length, Home: 0, End: labels.length - 1 }[event.key];
    if (index === undefined) return;
    event.preventDefault();
    setSelected(index);
    tabs.current[index]?.focus();
  }

  return (
    <>
      <div role="tablist" aria-label="Product previews" className="showcase-tabs">
        {labels.map((label, index) => (
          <button key={label} type="button" ref={(button) => { tabs.current[index] = button; }}
            role="tab" id={`showcase-tab-${index}`} aria-selected={selected === index}
            aria-controls={`showcase-panel-${index}`} tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)} onKeyDown={changeTab}>{label}</button>
        ))}
      </div>
      {labels.map((label, index) => (
        <div key={label} role="tabpanel" id={`showcase-panel-${index}`} aria-labelledby={`showcase-tab-${index}`}
          className="showcase-panel" hidden={selected !== index} tabIndex={0}>
          {panels[index]}
        </div>
      ))}
    </>
  );
}
