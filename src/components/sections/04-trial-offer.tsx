import { useEffect, useState } from "react";
import { ParallaxLayer, ScrollReveal } from "@/src/components/scroll-effects";

const imgGroup4 = "/assets/4-0e304.svg";
const INITIAL_REMAINING_SECONDS = 2 * 86400 + 23 * 3600 + 59 * 60 + 59;
const CYCLE_SECONDS = 3 * 86400;

function formatCountdown(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Section04TrialOffer() {
  const [remainingSeconds, setRemainingSeconds] = useState(INITIAL_REMAINING_SECONDS);

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = window.setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const nextRemaining =
        ((INITIAL_REMAINING_SECONDS - elapsedSeconds) % CYCLE_SECONDS + CYCLE_SECONDS) %
        CYCLE_SECONDS;
      setRemainingSeconds(nextRemaining);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const countdown = formatCountdown(remainingSeconds);

  return (
    <section id="trial" className="page-section flex flex-col gap-[var(--space-0)] items-center px-[var(--space-162)] py-[var(--space-64)] relative size-full" data-node-id="5:949" data-name="Section 04 · Trial offer">
      <div className="trial-gradient" aria-hidden="true">
        <ParallaxLayer offset={[-90, 90]} scaleRange={[1.03, 1.1]} className="absolute inset-0 pointer-events-none">
          <img alt="" width={2330} height={1589} src={imgGroup4} />
        </ParallaxLayer>
      </div>
      <ScrollReveal className="w-[1116px] max-w-full">
      <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-05)] border-solid flex gap-[var(--space-58)] items-center overflow-clip p-[var(--space-32)] relative rounded-[var(--radius-20)] shrink-0 w-[1116px]" data-node-id="5:955" data-name="30-day free trial · Conversion offer">
        <div className="flex flex-col gap-[var(--space-16)] items-start overflow-clip p-[var(--space-0)] relative shrink-0 w-[620px]" data-node-id="5:956" data-name="Offer · Messaging and actions">
          <h2 className="font-medium leading-[44px] not-italic relative shrink-0 text-[36px] text-[color:var(--text-accent)] tracking-[-0.5px] w-[620px]" data-node-id="5:957">
            Start a 30-day free trial
          </h2>
          <p className="font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary)] w-[620px]" data-node-id="5:958">
            Track time, manage projects, and make every hour count.
          </p>
          <div className="flex gap-[var(--space-12)] h-[56px] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[620px]" data-node-id="5:959" data-name="Hero CTA pair">
            <button type="button" data-preview-action="Start a free trial" className="bg-[var(--accent-highlight-variant-02)] flex font-medium gap-[var(--space-14)] h-[56px] items-center justify-center not-italic overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 text-[color:var(--text-primary)] w-[222px]" data-node-id="5:960" data-name="Start my free trial">
              <p className="leading-[24px] relative shrink-0 text-[16px] w-[133px]" data-node-id="5:961">
                Start my free trial
              </p>
              <p className="leading-[28px] relative shrink-0 text-[20px] w-[12px]" data-node-id="5:962">
                →
              </p>
            </button>
            <a href="#showcase" className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle)] border-solid flex gap-[var(--space-14)] h-[56px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[180px]" data-node-id="5:963" data-name="Watch demo">
              <p className="font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary)] w-[97px]" data-node-id="5:964">
                Watch demo
              </p>
            </a>
          </div>
          <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] w-[620px]" data-node-id="5:965">
            No credit card required
          </p>
        </div>
        <div className="flex flex-col gap-[var(--space-16)] items-start overflow-clip p-[var(--space-0)] relative shrink-0 w-[374px]" data-node-id="5:966" data-name="Offer ends in · Countdown preview">
          <p className="font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary)] w-[99px]" data-node-id="5:967">
            Offer ends in
          </p>
          <div className="flex gap-[var(--space-10)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[374px]" data-node-id="5:968" data-name="Countdown · Units">
            <div className="flex flex-col gap-[var(--space-12)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[86px]" data-node-id="5:969" data-name="DAYS">
              <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-05)] border-solid flex flex-col gap-[var(--space-0)] h-[88px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[86px]" data-node-id="5:970" data-name="DAYS · 02">
                <p className="font-medium leading-[56px] not-italic relative shrink-0 text-[44px] text-[color:var(--text-primary)] text-center tracking-[-1px] tabular-nums w-[86px]" data-node-id="5:971">
                  {countdown.days}
                </p>
              </div>
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-[color:var(--text-secondary)] text-center tracking-[0.5px] w-[86px]" data-node-id="5:972">
                DAYS
              </p>
            </div>
            <div className="flex flex-col gap-[var(--space-12)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[86px]" data-node-id="5:973" data-name="HOURS">
              <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-05)] border-solid flex flex-col gap-[var(--space-0)] h-[88px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[86px]" data-node-id="5:974" data-name="HOURS · 23">
                <p className="font-medium leading-[56px] not-italic relative shrink-0 text-[44px] text-[color:var(--text-primary)] text-center tracking-[-1px] tabular-nums w-[86px]" data-node-id="5:975">
                  {countdown.hours}
                </p>
              </div>
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-[color:var(--text-secondary)] text-center tracking-[0.5px] w-[86px]" data-node-id="5:976">
                HOURS
              </p>
            </div>
            <div className="flex flex-col gap-[var(--space-12)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[86px]" data-node-id="5:977" data-name="MINUTES">
              <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-05)] border-solid flex flex-col gap-[var(--space-0)] h-[88px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[86px]" data-node-id="5:978" data-name="MINUTES · 59">
                <p className="font-medium leading-[56px] not-italic relative shrink-0 text-[44px] text-[color:var(--text-primary)] text-center tracking-[-1px] tabular-nums w-[86px]" data-node-id="5:979">
                  {countdown.minutes}
                </p>
              </div>
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-[color:var(--text-secondary)] text-center tracking-[0.5px] w-[86px]" data-node-id="5:980">
                MINUTES
              </p>
            </div>
            <div className="flex flex-col gap-[var(--space-12)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[86px]" data-node-id="5:981" data-name="SECONDS">
              <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-05)] border-solid flex flex-col gap-[var(--space-0)] h-[88px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[86px]" data-node-id="5:982" data-name="SECONDS · 59">
                <p className="font-medium leading-[56px] not-italic relative shrink-0 text-[44px] text-[color:var(--text-primary)] text-center tracking-[-1px] tabular-nums w-[86px]" data-node-id="5:983">
                  {countdown.seconds}
                </p>
              </div>
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-[color:var(--text-secondary)] text-center tracking-[0.5px] w-[86px]" data-node-id="5:984">
                SECONDS
              </p>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
