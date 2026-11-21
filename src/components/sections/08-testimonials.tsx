import { ParallaxLayer, ScrollReveal } from "@/src/components/scroll-effects";
import sarahMitchellPortrait from "@/src/assets/images/sarah_mitchell_portrait_1795227158175.jpg";
import danielBrooksPortrait from "@/src/assets/images/daniel_brooks_portrait_1795227156622.jpg";
import emmaCarterPortrait from "@/src/assets/images/emma_carter_portrait_1795227157464.jpg";

const imgEllipse1 = "/assets/8-62093.svg";
const imgEllipse3 = "/assets/8-eaaa0.svg";
const imgEllipse2 = "/assets/8-c2a4d.svg";

export default function Section07Testimonials() {
  return (
    <section id="testimonials" className="page-section bg-[var(--surface-inverse-variant-02)] flex flex-col gap-[var(--space-48)] items-start px-[var(--space-162)] py-[var(--space-96)] relative size-full" data-node-id="5:1287" data-name="Section 07 · Testimonials">
      <div className="absolute bg-[var(--surface-inverse-variant-02)] inset-0 overflow-clip" data-node-id="5:1288" data-name="Dark indigo · Lavender gradient background">
        <ParallaxLayer offset={[-85, 85]} className="absolute inset-0 pointer-events-none">
        <div className="-translate-x-1/2 absolute contents left-[calc(50%-38.5px)] top-[-230px]" data-node-id="5:1289" data-name="Matching soft violet gradient">
          <div className="-translate-x-1/2 absolute h-[1142px] left-[calc(50%-111px)] top-[-230px] w-[1738px]" data-node-id="5:1290">
            <div className="absolute inset-[-19.57%_-12.86%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[1079px] left-[calc(50%-111px)] top-[-230px] w-[1738px]" data-node-id="5:1291">
            <div className="absolute inset-[-20.71%_-12.86%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[652px] left-[calc(50%+9.5px)] top-[-125px] w-[1787px]" data-node-id="5:1292">
            <div className="absolute inset-[-34.28%_-12.51%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
            </div>
          </div>
        </div>
        </ParallaxLayer>
      </div>
      <ScrollReveal className="w-[1116px] max-w-full">
      <div className="flex flex-col font-medium gap-[var(--space-16)] items-start not-italic p-[var(--space-0)] relative shrink-0 text-center w-[1116px]" data-node-id="5:1293" data-name="Testimonials · Introduction">
        <p className="leading-[44px] relative shrink-0 text-[36px] text-[color:var(--text-inverse-muted)] tracking-[-0.5px] w-[1116px]" data-node-id="5:1294">
          What teams are saying
        </p>
        <h2 className="leading-[56px] relative shrink-0 text-[44px] text-[color:var(--text-inverse)] tracking-[-1px] w-[1116px]" data-node-id="5:1295">
          “A simpler way to manage time.”
        </h2>
      </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1} className="w-[1116px] max-w-full">
      <div className="flex gap-[var(--space-24)] h-[352px] items-start p-[var(--space-0)] relative shrink-0 w-[1116px]" data-node-id="5:1296" data-name="Testimonials · Equal card grid">
        <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-13)] border-solid flex flex-col gap-[var(--space-12)] h-[352px] items-start p-[var(--space-28)] relative rounded-[var(--radius-12)] shrink-0 w-[356px]" data-node-id="5:1297" data-name="Testimonial 01 · Sarah Mitchell">
          <p className="font-medium leading-[48px] not-italic relative shrink-0 text-[62px] text-[color:var(--text-accent)] w-[300px]" data-node-id="5:1298">
            “
          </p>
          <p className="font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--text-primary)] w-[300px]" data-node-id="5:1299">
            TimeFlow makes it easy to see where our project hours are going. Everything feels more organized and easier to manage.
          </p>
          <div className="flex-[1_0_0] min-h-px relative w-[300px]" data-node-id="5:1300" data-name="Flexible space" />
          <div className="flex gap-[var(--space-12)] h-[52px] items-center p-[var(--space-0)] relative shrink-0 w-[300px]" data-node-id="5:1301" data-name="Author">
            <div className="bg-[var(--surface-subtle-variant-13)] overflow-hidden relative rounded-full shrink-0 size-[44px] ring-1 ring-[var(--border-subtle-variant-13)]" data-node-id="5:1302" data-name="Avatar">
              <img
                src={sarahMitchellPortrait}
                alt="Sarah Mitchell"
                width={44}
                height={44}
                loading="lazy"
                className="block size-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-[var(--space-3)] items-start not-italic p-[var(--space-0)] relative shrink-0 w-[248px]" data-node-id="5:1304" data-name="Name and role">
              <p className="font-medium leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text-primary)] w-[248px]" data-node-id="5:1305">
                Sarah Mitchell
              </p>
              <p className="font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--text-secondary)] w-[248px]" data-node-id="5:1306">
                Creative Director, Northstar Studio
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-13)] border-solid flex flex-col gap-[var(--space-12)] h-[352px] items-start p-[var(--space-28)] relative rounded-[var(--radius-12)] shrink-0 w-[356px]" data-node-id="5:1307" data-name="Testimonial 02 · Daniel Brooks">
          <p className="font-medium leading-[48px] not-italic relative shrink-0 text-[62px] text-[color:var(--text-accent)] w-[300px]" data-node-id="5:1308">
            “
          </p>
          <p className="font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--text-primary)] w-[300px]" data-node-id="5:1309">{`Tracking time used to feel like another task on my list. Now it's something I barely have to think about.`}</p>
          <div className="flex-[1_0_0] min-h-px relative w-[300px]" data-node-id="5:1310" data-name="Flexible space" />
          <div className="flex gap-[var(--space-12)] h-[52px] items-center p-[var(--space-0)] relative shrink-0 w-[300px]" data-node-id="5:1311" data-name="Author">
            <div className="bg-[var(--surface-subtle-variant-13)] overflow-hidden relative rounded-full shrink-0 size-[44px] ring-1 ring-[var(--border-subtle-variant-13)]" data-node-id="5:1312" data-name="Avatar">
              <img
                src={danielBrooksPortrait}
                alt="Daniel Brooks"
                width={44}
                height={44}
                loading="lazy"
                className="block size-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-[var(--space-3)] items-start not-italic p-[var(--space-0)] relative shrink-0 w-[248px]" data-node-id="5:1314" data-name="Name and role">
              <p className="font-medium leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text-primary)] w-[248px]" data-node-id="5:1315">
                Daniel Brooks
              </p>
              <p className="font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--text-secondary)] w-[248px]" data-node-id="5:1316">
                Freelance Product Designer
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-13)] border-solid flex flex-col gap-[var(--space-12)] h-[352px] items-start p-[var(--space-28)] relative rounded-[var(--radius-12)] shrink-0 w-[356px]" data-node-id="5:1317" data-name="Testimonial 03 · Emma Carter">
          <p className="font-medium leading-[48px] not-italic relative shrink-0 text-[62px] text-[color:var(--text-accent)] w-[300px]" data-node-id="5:1318">
            “
          </p>
          <p className="font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--text-primary)] w-[300px]" data-node-id="5:1319">
            Having project hours and reporting in one place gives our team a much clearer picture of how we work.
          </p>
          <div className="flex-[1_0_0] min-h-px relative w-[300px]" data-node-id="5:1320" data-name="Flexible space" />
          <div className="flex gap-[var(--space-12)] h-[52px] items-center p-[var(--space-0)] relative shrink-0 w-[300px]" data-node-id="5:1321" data-name="Author">
            <div className="bg-[var(--surface-subtle-variant-13)] overflow-hidden relative rounded-full shrink-0 size-[44px] ring-1 ring-[var(--border-subtle-variant-13)]" data-node-id="5:1322" data-name="Avatar">
              <img
                src={emmaCarterPortrait}
                alt="Emma Carter"
                width={44}
                height={44}
                loading="lazy"
                className="block size-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-[var(--space-3)] items-start not-italic p-[var(--space-0)] relative shrink-0 w-[248px]" data-node-id="5:1324" data-name="Name and role">
              <p className="font-medium leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text-primary)] w-[248px]" data-node-id="5:1325">
                Emma Carter
              </p>
              <p className="font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--text-secondary)] w-[248px]" data-node-id="5:1326">
                Operations Lead, Vertex Labs
              </p>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
