import { ParallaxLayer, ScrollReveal } from "@/src/components/scroll-effects";

export default function Section09FinalConversionCta() {
  return (
    <section id="get-started" className="page-section bg-[var(--surface-inverse-variant-02)] flex flex-col gap-[var(--space-24)] items-center px-[var(--space-162)] py-[var(--space-96)] relative size-full" data-node-id="5:1440" data-name="Section 09 · Final Conversion CTA">
      <ParallaxLayer offset={[-55, 55]} scaleRange={[1.06, 1.14]} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" data-node-id="5:1441" style={{ backgroundImage: "linear-gradient(180deg, var(--color\\/gradient\\/stop\\/variant-08,rgb(16, 12, 32)) 0%, var(--color\\/gradient\\/stop\\/variant-11,rgb(33, 18, 68)) 42%, var(--color\\/gradient\\/stop\\/variant-12,rgb(81, 48, 174)) 82%, var(--color\\/gradient\\/stop\\/variant-13,rgb(125, 98, 234)) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 498' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(130.91 0 0 49.8 720 517.92)'><stop stop-color='rgba(16,12,32,1)' offset='0'/><stop stop-color='rgba(16,12,32,0.92)' offset='0.58'/><stop stop-color='rgba(16,12,32,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Testimonials-matched · Dark indigo and violet gradient" />
      </ParallaxLayer>
      <ScrollReveal className="w-[1116px] max-w-full">
      <div className="flex flex-col gap-[var(--space-16)] items-center not-italic overflow-clip p-[var(--space-0)] relative shrink-0 text-center w-[1116px]" data-node-id="5:1442" data-name="Final CTA · Heading and description">
        <h2 className="font-medium leading-[0] relative shrink-0 text-[64px] text-[color:var(--text-inverse)] tracking-[-1.5px] w-[1116px]" data-node-id="5:1443">
          <span className="block leading-[72px] mb-0">Your time is valuable.</span>
          <span className="block leading-[72px]">Make it count.</span>
        </h2>
        <p className="font-normal leading-[28px] relative shrink-0 text-[18px] text-[color:var(--text-inverse-muted)] w-[780px]" data-node-id="5:1444">
          Bring your time, projects, and team together in one smarter workspace.
        </p>
      </div>
      </ScrollReveal>
      <ScrollReveal delay={0.12} className="w-[1116px] max-w-full">
      <div className="flex flex-col gap-[var(--space-16)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[1116px]" data-node-id="5:1445" data-name="Final CTA · Action and reassurance">
        <button type="button" data-preview-action="Start a free trial" className="bg-[var(--accent-highlight-variant-05)] flex flex-col gap-[var(--space-0)] h-[56px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[252px]" data-node-id="5:1446" data-name="Primary CTA · Get Started for Free">
          <p className="font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary)] text-center w-[220px]" data-node-id="5:1447">
            Get Started for Free
          </p>
        </button>
        <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text-inverse-muted)] text-center w-[420px]" data-node-id="5:1448">
          Start tracking in minutes. No credit cards needed
        </p>
      </div>
      </ScrollReveal>
    </section>
  );
}
