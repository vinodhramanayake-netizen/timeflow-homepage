import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";

const TIMEFLOW_LOGO_PATHS: Array<[number, number, string, string]> = [
  [
    0,
    21.31,
    "#0B0B0F",
    "M 24.296 71.700 C 19.509 71.700 15.621 70.387 12.634 67.759 C 9.682 65.096 8.207 60.776 8.207 54.801 L 8.207 0 L 22.460 0 L 22.460 53.397 C 22.460 55.917 22.946 57.663 23.918 58.635 C 24.926 59.570 26.330 60.038 28.129 60.038 C 29.101 60.038 29.983 59.966 30.775 59.822 C 31.603 59.678 32.521 59.462 33.529 59.174 C 34.536 58.851 35.040 58.689 35.040 58.689 L 35.040 69.595 C 35.040 69.595 34.392 69.811 33.097 70.243 C 31.837 70.675 30.433 71.017 28.885 71.269 C 27.374 71.556 25.844 71.700 24.296 71.700 Z M 0 25.538 L 0 13.768 L 35.148 13.768 L 35.148 25.538 L 0 25.538 Z",
  ],
  [
    48.48,
    13.59,
    "#4F46E5",
    "M 1.512 79.313 L 1.512 22.460 L 15.711 22.460 L 15.711 79.313 L 1.512 79.313 Z M 8.585 17.061 C 6.209 17.061 4.175 16.215 2.484 14.524 C 0.828 12.832 0 10.798 0 8.423 C 0 6.047 0.846 4.049 2.538 2.430 C 4.229 0.810 6.245 0 8.585 0 C 11.104 0 13.174 0.810 14.794 2.430 C 16.449 4.049 17.277 6.047 17.277 8.423 C 17.277 10.834 16.449 12.886 14.794 14.578 C 13.174 16.233 11.104 17.061 8.585 17.061 Z M 33.299 67.513 C 31.393 68.673 28.907 68.069 27.747 66.164 L 6.257 30.883 C 5.097 28.978 5.700 26.492 7.606 25.331 L 10.651 23.506 C 12.557 22.346 15.918 21.601 17.079 23.506 L 39.017 59.299 C 40.178 61.205 39.574 63.690 37.668 64.851 L 33.299 67.513 Z",
  ],
  [
    96.5,
    14.52,
    "#0B0B0F",
    "M 0 78.395 L 0 21.543 L 13.876 21.543 L 13.876 31.693 L 12.418 29.857 L 13.876 29.857 C 15.603 27.014 17.979 24.746 21.003 23.054 C 24.026 21.327 27.590 20.463 31.693 20.463 C 35.724 20.463 39.342 21.525 42.545 23.648 C 45.749 25.736 47.854 28.381 48.862 31.585 C 51.130 27.878 53.883 25.106 57.123 23.270 C 60.362 21.399 63.980 20.463 67.975 20.463 C 73.914 20.463 78.629 22.334 82.121 26.078 C 85.648 29.785 87.412 34.644 87.412 40.655 L 87.412 78.395 L 73.212 78.395 L 73.212 45.083 C 73.212 41.303 72.330 38.352 70.567 36.228 C 68.839 34.105 66.409 33.043 63.278 33.043 C 60.002 33.043 57.105 34.284 54.585 36.768 C 52.066 39.216 50.806 42.491 50.806 46.594 L 50.806 78.395 L 36.606 78.395 L 36.606 45.137 C 36.606 41.465 35.742 38.532 34.015 36.336 C 32.287 34.141 29.821 33.043 26.618 33.043 C 23.306 33.043 20.409 34.284 17.925 36.768 C 15.478 39.252 14.254 42.509 14.254 46.541 L 14.254 78.395 Z",
  ],
  [
    96.5,
    14.52,
    "#0B0B0F",
    "M 124.688 79.475 C 116.157 79.475 108.976 76.686 103.145 71.107 C 97.350 65.527 94.453 58.473 94.453 49.942 C 94.453 41.411 97.332 34.374 103.091 28.831 C 108.886 23.252 115.941 20.463 124.256 20.463 C 132.787 20.463 139.643 23.108 144.827 28.399 C 150.046 33.655 152.655 40.314 152.655 48.376 L 152.655 53.559 L 101.580 53.559 L 101.580 45.029 L 139.805 45.029 C 139.517 41.357 137.988 38.298 135.216 35.850 C 132.445 33.403 128.845 32.179 124.418 32.179 C 119.775 32.179 115.761 33.871 112.378 37.254 C 109.030 40.637 107.357 44.975 107.357 50.266 C 107.357 55.629 109.120 59.966 112.648 63.278 C 116.175 66.553 120.261 68.191 124.904 68.191 C 127.315 68.191 129.457 67.849 131.329 67.165 C 133.200 66.481 134.892 65.473 136.404 64.142 C 137.952 62.810 139.481 60.866 140.993 58.311 L 151.414 63.278 C 149.254 67.309 146.950 70.441 144.503 72.672 C 142.055 74.904 139.230 76.596 136.026 77.747 C 132.859 78.899 129.079 79.475 124.688 79.475 Z",
  ],
  [
    96.5,
    14.52,
    "#0B0B0F",
    "M 153.247 34.069 L 153.247 22.244 L 188.665 22.244 L 188.665 34.069 L 153.247 34.069 Z M 162.101 78.395 L 162.101 17.871 C 162.101 12.400 163.559 8.063 166.475 4.859 C 169.426 1.620 173.529 0 178.785 0 C 180.080 0 181.466 0.126 182.942 0.378 C 184.454 0.594 185.947 0.954 187.423 1.458 C 188.935 1.962 189.691 2.214 189.691 2.214 L 189.691 12.796 C 189.691 12.796 189.223 12.652 188.287 12.364 C 187.351 12.040 186.397 11.806 185.426 11.662 C 184.490 11.482 183.590 11.392 182.726 11.392 C 180.710 11.392 179.145 11.986 178.029 13.174 C 176.913 14.326 176.355 16.143 176.355 18.627 L 176.355 78.395 L 162.101 78.395 Z",
  ],
  [
    298.61,
    0,
    "#0B0B0F",
    "M 0 77.316 L 0 0 L 14.254 0 L 14.254 77.316 L 0 77.316 Z",
  ],
  [
    324.31,
    14.69,
    "#0B0B0F",
    "M 29.803 59.012 C 21.309 59.012 14.218 56.151 8.531 50.428 C 2.844 44.669 0 37.686 0 29.479 C 0 21.309 2.844 14.362 8.531 8.639 C 14.218 2.880 21.309 0 29.803 0 C 38.262 0 45.353 2.880 51.076 8.639 C 56.799 14.362 59.660 21.309 59.660 29.479 C 59.660 37.686 56.799 44.669 51.076 50.428 C 45.353 56.151 38.262 59.012 29.803 59.012 Z M 29.803 45.785 C 34.194 45.785 37.992 44.237 41.195 41.141 C 44.399 38.010 46.001 34.123 46.001 29.479 C 46.001 24.836 44.399 20.967 41.195 17.871 C 37.992 14.776 34.194 13.228 29.803 13.228 C 25.412 13.228 21.633 14.776 18.465 17.871 C 15.298 20.967 13.714 24.836 13.714 29.479 C 13.714 34.123 15.298 38.010 18.465 41.141 C 21.633 44.237 25.412 45.785 29.803 45.785 Z",
  ],
  [
    389.69,
    33.79,
    "#0B0B0F",
    "M 19.545 57.285 L 0 0 L 14.578 0 L 25.106 35.418 L 26.348 39.846 L 27.590 35.526 L 37.740 0 L 50.266 0 L 60.470 35.364 L 61.658 39.522 L 62.846 35.418 L 73.428 0 L 86.926 0 L 67.165 57.285 L 55.395 57.285 L 44.489 22.676 L 43.355 18.735 L 42.221 22.676 L 31.477 57.285 L 19.545 57.285 Z",
  ],
];

function TimeflowLogoMark({ width, animate }: { width: number; animate: boolean }) {
  return (
    <svg
      width={width}
      viewBox="0 0 476.62 94"
      className={animate ? "block overflow-visible" : "block mt-[2px] overflow-visible"}
    >
      {TIMEFLOW_LOGO_PATHS.map(([tx, ty, fill, d], i) => (
        <g key={i} transform={`translate(${tx},${ty})`}>
          <g
            className={animate ? "hero-stage-logo-piece" : undefined}
            style={animate ? ({ "--i": i } as CSSProperties) : undefined}
          >
            <path fill={fill} d={d} />
          </g>
        </g>
      ))}
    </svg>
  );
}

function formatTimerClock(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
}

function formatShortDuration(totalSeconds: number) {
  if (totalSeconds < 60) {
    return `${totalSeconds}s`;
  }
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }
  const seconds = totalSeconds % 60;
  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

export function HeroAnimatedDashboard() {
  const reduced = useReducedMotion();

  const [introOff, setIntroOff] = useState(Boolean(reduced));
  const [logoOut, setLogoOut] = useState(Boolean(reduced));
  const [appOn, setAppOn] = useState(Boolean(reduced));

  const [selOpen, setSelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [optionHover, setOptionHover] = useState(false);
  const [projectSelected, setProjectSelected] = useState(Boolean(reduced));
  const [running, setRunning] = useState(Boolean(reduced));
  const [rowOn, setRowOn] = useState(Boolean(reduced));
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 40 });
  const [cursorDurationMs, setCursorDurationMs] = useState(0);
  const [cursorPressed, setCursorPressed] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timeouts: number[] = [];
    let tickInterval = 0;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(resolve, ms);
        timeouts.push(id);
      });

    const moveCursor = (x: number, y: number, durationMs: number) => {
      setCursorDurationMs(durationMs);
      setCursorPos({ x, y });
      return wait(durationMs);
    };

    const clickAt = async (x: number, y: number) => {
      setCursorPressed(true);
      setRipple((prev) => ({ x, y, key: (prev?.key ?? 0) + 1 }));
      await wait(130);
      if (!cancelled) {
        setCursorPressed(false);
      }
    };

    if (reduced) {
      tickInterval = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
      return () => {
        cancelled = true;
        window.clearInterval(tickInterval);
      };
    }

    async function runSequence() {
      await wait(60);
      if (cancelled) return;
      await wait(850);
      if (cancelled) return;

      setCursorVisible(true);
      await moveCursor(480, 262, 950);
      if (cancelled) return;

      await clickAt(504, 272);
      if (cancelled) return;
      setLogoOut(true);
      setIntroOff(true);
      setAppOn(true);

      await moveCursor(300, 165, 1000);
      if (cancelled) return;

      await clickAt(311, 157);
      if (cancelled) return;
      setSelOpen(true);
      setMenuOpen(true);

      await wait(550);
      if (cancelled) return;

      await moveCursor(330, 262, 650);
      if (cancelled) return;
      setOptionHover(true);
      await wait(250);
      if (cancelled) return;

      await clickAt(349, 259);
      if (cancelled) return;
      setProjectSelected(true);
      setMenuOpen(false);
      setSelOpen(false);

      await wait(450);
      if (cancelled) return;

      await moveCursor(918, 140, 850);
      if (cancelled) return;

      await clickAt(926, 134);
      if (cancelled) return;
      setRunning(true);

      const rowTimer = window.setTimeout(() => {
        if (!cancelled) setRowOn(true);
      }, 150);
      timeouts.push(rowTimer);

      setCursorDurationMs(900);
      setCursorPos({ x: 960, y: 200 });

      let seconds = 0;
      tickInterval = window.setInterval(() => {
        if (cancelled) return;
        seconds += 1;
        setElapsedSeconds(seconds);
        if (seconds === 12) {
          setCursorVisible(false);
        }
      }, 1000);
    }

    void runSequence();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
      if (tickInterval) window.clearInterval(tickInterval);
    };
  }, [reduced]);

  const cardMetric = running ? formatShortDuration(elapsedSeconds) : "0h 00m";

  return (
    <div
      className="hero-stage relative h-[544px] w-[1008px] shrink-0 overflow-hidden rounded-tl-[18px] rounded-tr-[18px] bg-white text-[#1B1535] shadow-[0_10px_40px_rgba(40,30,90,0.18)]"
      data-node-id="5:662"
      data-name="Timeflow · Animated dashboard preview"
    >
      <div className={`hero-stage-app ${appOn ? "is-on" : ""}`}>
        <div className="hero-stage-side">
          <div className="hero-stage-logo-small">
            <TimeflowLogoMark width={94} animate={false} />
          </div>
          <div className="hero-stage-ws-label">WORKSPACE</div>
          <div className="hero-stage-ws-name">Studio workspace</div>
          <div className="hero-stage-nav is-active top-[121px]">Time tracker</div>
          <div className="hero-stage-nav top-[165px]">Timesheet</div>
          <div className="hero-stage-nav top-[209px]">Projects</div>
          <div className="hero-stage-nav top-[253px]">Team</div>
          <div className="hero-stage-nav top-[297px]">Reports</div>
          <div className="hero-stage-trial">
            <b>Make every hour count</b>
            <small>Your trial has 23 days left</small>
            <span className="hero-stage-btn hero-stage-lime">Explore plans</span>
          </div>
          <div className="hero-stage-settings">Workspace settings</div>
        </div>

        <div className="hero-stage-main">
          <p className="hero-stage-heading">Time tracker</p>
          <div className="hero-stage-sub">A little focus. A lot of progress.</div>
          <div className="hero-stage-top-actions">
            <span className="text-[10.5px] font-semibold">This week</span>
            <span className="hero-stage-btn hero-stage-pri">+ Manual entry</span>
          </div>

          <div className="hero-stage-panel">
            <div className="hero-stage-ttl">
              {running ? "Website redesign" : "What are you working on?"}
            </div>
            <div className="hero-stage-ttls">
              {running
                ? "Studio workspace · Billable"
                : projectSelected
                  ? "Ready to track your time"
                  : "Choose a project to get started"}
            </div>
            <div className={`hero-stage-sel ${selOpen ? "is-open" : ""}`}>
              <span>{projectSelected ? "Website redesign" : "Select Your Project"}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#1B1535" strokeWidth="1.6">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            <div
              className="hero-stage-time"
              style={{ left: running ? 368 : 382 }}
            >
              {formatTimerClock(elapsedSeconds)}
            </div>
            <div
              className="hero-stage-tsub"
              style={{ left: running ? 368 : 382 }}
            >
              {running ? (
                <>
                  <span className="hero-stage-dot" />
                  Timer running
                </>
              ) : projectSelected ? (
                "Ready to start"
              ) : (
                "Ready when you are"
              )}
            </div>
            <div className="hero-stage-ctl">
              {!running ? (
                <span
                  className={`hero-stage-btn hero-stage-start ${projectSelected ? "is-ready" : ""}`}
                >
                  Start timer
                </span>
              ) : (
                <span className="flex gap-[8px]">
                  <span className="hero-stage-btn hero-stage-lime">Pause</span>
                  <span className="hero-stage-btn hero-stage-stop">Stop</span>
                </span>
              )}
            </div>
          </div>

          <div className="hero-stage-card left-[24px]">
            <span className="hero-stage-card-label">Today</span>
            <span className="hero-stage-card-value">{cardMetric}</span>
            <span className="hero-stage-card-note">
              {running ? "Across 1 entry" : "No entries yet"}
            </span>
          </div>
          <div className="hero-stage-card left-[290px]">
            <span className="hero-stage-card-label">This week</span>
            <span className="hero-stage-card-value">{cardMetric}</span>
            <span className="hero-stage-card-note">
              {running ? "1 active project" : "No active projects"}
            </span>
          </div>
          <div className="hero-stage-card left-[556px]">
            <span className="hero-stage-card-label">Billable time</span>
            <span className="hero-stage-card-value">{cardMetric}</span>
            <span className="hero-stage-card-note">
              {running ? "100% of tracked time" : "No billable time"}
            </span>
          </div>

          <div className="hero-stage-act">
            <b className="hero-stage-act-title">Today’s activity</b>
            <span className="hero-stage-act-total">
              Today’s total &nbsp; {cardMetric}
            </span>
            <div className={`hero-stage-empty ${running ? "opacity-0" : "opacity-100"}`}>
              <b>No activity yet</b>
              Start your first timer and your activity will appear here.
            </div>
            <div className={`hero-stage-tbl ${running ? "opacity-100" : "opacity-0"}`}>
              <div className="hero-stage-th">
                <span className="left-[8px] top-[4px]">TASK / PROJECT</span>
                <span className="left-[276px] top-[4px]">BILLING</span>
                <span className="left-[402px] top-[4px]">TIME</span>
                <span className="left-[606px] top-[4px]">DURATION</span>
              </div>
              <div className={`hero-stage-row ${rowOn ? "is-on" : ""}`}>
                <span className="left-[8px] top-[5px] text-[12px] font-semibold leading-[1.2]">
                  Untitled activity
                  <br />
                  <em className="not-italic font-normal text-[9px] text-[#6B6785]">
                    Website redesign
                  </em>
                </span>
                <span className="hero-stage-btn left-[276px] top-[6px] bg-[#E3DCFB] text-[#6246E5]">
                  Billable
                </span>
                <span className="left-[402px] top-[12px] text-[10.5px] text-[#6B6785]">
                  09:30 – Running
                </span>
                <span className="left-[606px] top-[11px] text-[12px] font-bold tabular-nums">
                  {formatShortDuration(elapsedSeconds)}
                </span>
              </div>
            </div>
            <div className="hero-stage-foot">
              <span>{running ? "All changes saved" : "Ready for your first activity"}</span>
              <span className="text-[#6246E5]">View timesheet →</span>
            </div>
          </div>
        </div>

        <div className={`hero-stage-menu ${menuOpen ? "is-on" : ""}`}>
          <div className="hero-stage-menu-search">Search projects…</div>
          <div className="hero-stage-menu-group">STUDIO WORKSPACE</div>
          <div className={`hero-stage-opt ${optionHover ? "is-hovered" : ""}`}>
            Website redesign
            <small>Billable</small>
          </div>
          <div className="hero-stage-opt">
            Mobile app
            <small>Billable</small>
          </div>
          <div className="hero-stage-opt">
            Internal projects
            <small>Non-billable</small>
          </div>
        </div>
      </div>

      <div className={`hero-stage-intro ${introOff ? "is-off" : ""}`}>
        <div className="hero-stage-ring" />
        <div className={`hero-stage-logo ${logoOut ? "is-out" : ""}`}>
          <TimeflowLogoMark width={476} animate={!reduced} />
        </div>
      </div>

      <div
        className={`hero-stage-cursor ${cursorPressed ? "is-down" : ""}`}
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          transitionDuration: cursorDurationMs ? `${cursorDurationMs}ms, 350ms` : "0ms, 350ms",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M3 13L27 3 17 27l-3-10z"
            fill="#5B4CE6"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {ripple && (
        <div
          key={ripple.key}
          className="hero-stage-ripple is-go"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
    </div>
  );
}
