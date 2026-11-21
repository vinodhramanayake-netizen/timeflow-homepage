import { PreviewDialog } from "@/src/components/preview-dialog";
import { SmoothScrollController } from "@/src/components/scroll-effects";
import Section0 from "@/src/components/sections/01-hero-and-navigation";
import Section1 from "@/src/components/sections/02-trusted-teams";
import Section2 from "@/src/components/sections/03-features";
import Section3 from "@/src/components/sections/04-trial-offer";
import Section4 from "@/src/components/sections/05-how-it-works";
import Section5 from "@/src/components/sections/06-interactive-product-showcase";
import Section6 from "@/src/components/sections/07-benefits";
import Section7 from "@/src/components/sections/08-testimonials";
import Section8 from "@/src/components/sections/09-pricing-conversion";
import Section9 from "@/src/components/sections/10-final-conversion-cta";
import Section10 from "@/src/components/sections/11-footer";

export default function App() {
  return (
    <>
      <SmoothScrollController />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Section0 />
      <main id="main-content">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </main>
      <Section10 />
      <PreviewDialog />
    </>
  );
}
