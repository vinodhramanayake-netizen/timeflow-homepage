import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ScaledPreview } from "@/src/components/scaled-preview";
import { HeroAnimatedDashboard } from "@/src/components/hero-animated-dashboard";
import { smoothScrollToHash } from "@/src/components/scroll-effects";

const heroGradient = "/assets/hero-indigo-gradient.svg";
const imgGroup3 = "/assets/1-3de06.svg";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

interface NavigationBarProps {
  variant: "hero" | "sticky";
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onMobileLinkClick: (href: string) => void;
  onMobileLogIn: () => void;
  reduced: boolean | null;
}

function NavigationBar({
  variant,
  mobileMenuOpen,
  onToggleMobileMenu,
  onMobileLinkClick,
  onMobileLogIn,
  reduced,
}: NavigationBarProps) {
  const isSticky = variant === "sticky";
  const drawerId = isSticky ? "sticky-mobile-navigation-drawer" : "mobile-navigation-drawer";

  return (
    <div
      className="max-w-[1200px] relative shrink-0 w-full"
      data-node-id={isSticky ? undefined : "5:635"}
      data-nav-container=""
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex gap-[var(--space-32)] items-center justify-between max-w-[inherit] px-[var(--space-24)] py-[var(--space-14)] relative size-full">
        <a
          href="#home"
          aria-label="TimeFlow home"
          className="h-[28.421px] relative shrink-0 w-[144.109px]"
          data-node-id={isSticky ? undefined : "5:636"}
          data-nav-logo=""
        >
          <img alt="TimeFlow" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
        </a>
        <nav
          aria-label={isSticky ? "Sticky navigation" : "Main navigation"}
          className="hidden min-[841px]:flex gap-[var(--space-32)] items-center p-[var(--space-0)] relative shrink-0"
          data-node-id={isSticky ? undefined : "5:643"}
          data-name="Primary Navigation Links"
        >
          <a href="#product" className="flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative shrink-0" data-node-id={isSticky ? undefined : "5:644"} data-name="Link">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] w-[55px]" data-node-id={isSticky ? undefined : "5:645"}>
              <p className="leading-[22px]">Product</p>
            </div>
          </a>
          <a href="#solutions" className="flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative shrink-0" data-node-id={isSticky ? undefined : "5:646"} data-name="Link">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] w-[64px]" data-node-id={isSticky ? undefined : "5:647"}>
              <p className="leading-[22px]">Solutions</p>
            </div>
          </a>
          <a href="#how-it-works" className="flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative shrink-0" data-node-id={isSticky ? undefined : "5:648"} data-name="Link">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] w-[90px]" data-node-id={isSticky ? undefined : "5:649"}>
              <p className="leading-[22px]">How It Works</p>
            </div>
          </a>
          <a href="#pricing" className="flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative shrink-0" data-node-id={isSticky ? undefined : "5:650"} data-name="Link">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] w-[48px]" data-node-id={isSticky ? undefined : "5:651"}>
              <p className="leading-[22px]">Pricing</p>
            </div>
          </a>
        </nav>
        <div className="hidden min-[841px]:flex gap-[var(--space-12-01)] items-center p-[var(--space-0)] relative shrink-0" data-node-id={isSticky ? undefined : "5:652"} data-name="Header Action Buttons">
          <button
            type="button"
            data-preview-action="Log In"
            className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle)] border-solid flex flex-col gap-[var(--space-14)] h-[38px] items-center justify-center p-[1px] relative rounded-[var(--radius-12)] shrink-0 w-[65px]"
            data-node-id={isSticky ? undefined : "5:653"}
            data-nav-login=""
            data-name="Link"
          >
            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-primary)] w-[41px]" data-node-id={isSticky ? undefined : "5:654"}>
              <p className="leading-[22px]">Log In</p>
            </div>
          </button>
          <a
            href="#trial"
            className="bg-[var(--accent-highlight)] drop-shadow-[0px_1px_calc(var(--effect-radius-2)/2)_var(--effect-shadow)] flex gap-[var(--space-5-99)] items-center px-[var(--space-16)] py-[var(--space-8)] relative rounded-[var(--radius-12)] shrink-0"
            data-node-id={isSticky ? undefined : "5:655"}
            data-nav-cta=""
            data-name="Link"
          >
            <div className="relative shrink-0" data-node-id={isSticky ? undefined : "5:656"} data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative size-full">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-primary)] w-[80px]" data-node-id={isSticky ? undefined : "5:657"}>
                  <p className="leading-[22px]">{`Get Started `}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <button
          type="button"
          className="flex min-[841px]:hidden items-center justify-center w-10 h-10 rounded-[var(--radius-10)] border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[color:var(--text-primary)] shrink-0"
          aria-expanded={mobileMenuOpen}
          aria-controls={drawerId}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={onToggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id={drawerId}
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="min-[841px]:hidden overflow-hidden border-t border-[var(--border-subtle-variant-02)]"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onMobileLinkClick(item.href);
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-[var(--radius-10)] text-[15px] font-medium text-[color:var(--text-primary)] hover:bg-[var(--surface-subtle-variant-02)] hover:no-underline transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="h-px bg-[var(--border-subtle-variant-02)] my-2" />
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1 w-full">
                <button
                  type="button"
                  data-preview-action="Log In"
                  onClick={onMobileLogIn}
                  className="w-full sm:flex-1 min-h-[44px] px-4 py-2.5 flex items-center justify-center rounded-[var(--radius-12)] border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[14px] font-medium text-[color:var(--text-primary)] whitespace-nowrap transition-colors hover:bg-[var(--surface-subtle-variant-02)] hover:border-[var(--border-strong)]"
                >
                  Log In
                </button>
                <a
                  href="#trial"
                  onClick={(e) => {
                    e.preventDefault();
                    onMobileLinkClick("#trial");
                  }}
                  className="w-full sm:flex-1 min-h-[44px] px-4 py-2.5 flex items-center justify-center rounded-[var(--radius-12)] bg-[var(--accent-highlight)] drop-shadow-[0px_1px_calc(var(--effect-radius-2)/2)_var(--effect-shadow)] text-[14px] font-medium text-[color:var(--text-primary)] hover:no-underline hover:brightness-95 transition whitespace-nowrap"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Section01HeroAndNavigation() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyMobileMenuOpen, setStickyMobileMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const gradientScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.95], [1, 0.45]);

  const textY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.2]);

  const previewY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const previewScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const previewOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  useEffect(() => {
    const updateStickyNav = () => {
      const hero = headerRef.current;
      if (!hero) return;
      const pastHero = hero.getBoundingClientRect().bottom <= 48;
      setShowStickyNav((prev) => (prev === pastHero ? prev : pastHero));
    };

    updateStickyNav();
    window.addEventListener("scroll", updateStickyNav, { passive: true });
    window.addEventListener("resize", updateStickyNav, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateStickyNav);
      window.removeEventListener("resize", updateStickyNav);
    };
  }, []);

  useEffect(() => {
    if (showStickyNav) {
      setMobileMenuOpen(false);
    } else {
      setStickyMobileMenuOpen(false);
    }
  }, [showStickyNav]);

  useEffect(() => {
    if (!mobileMenuOpen && !stickyMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setStickyMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen, stickyMobileMenuOpen]);

  function handleMobileLinkClick(href: string) {
    setMobileMenuOpen(false);
    setStickyMobileMenuOpen(false);
    requestAnimationFrame(() => {
      smoothScrollToHash(href);
    });
  }

  return (
    <>
      <AnimatePresence>
        {showStickyNav && (
          <div className="site-sticky-nav fixed inset-x-0 top-3 sm:top-4 z-50 px-[var(--page-gutter)] pointer-events-none">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto mx-auto w-full max-w-[1116px] backdrop-blur-md bg-[var(--surface-canvas)]/95 border border-[var(--border-subtle-variant-02)] shadow-[0_12px_32px_rgba(16,12,32,0.12)] rounded-[var(--radius-14)]"
            >
              <NavigationBar
                variant="sticky"
                mobileMenuOpen={stickyMobileMenuOpen}
                onToggleMobileMenu={() => setStickyMobileMenuOpen((prev) => !prev)}
                onMobileLinkClick={handleMobileLinkClick}
                onMobileLogIn={() => requestAnimationFrame(() => setStickyMobileMenuOpen(false))}
                reduced={reduced}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <header ref={headerRef} id="home" className="page-section bg-[var(--surface-inverse)] flex flex-col gap-0 items-center overflow-clip pb-[var(--space-0)] pt-[var(--space-32)] px-[var(--space-162)] relative rounded-bl-none rounded-br-none size-full" data-node-id="5:627" data-name="Section 01 · Hero and navigation">
        <div className="absolute bg-[var(--surface-inverse-variant-02)] blur-[calc(var(--effect-radius-44-700001)/2)] bottom-0 left-[-9px] top-[100px] w-[1508px]" data-node-id="5:628" data-name="Gradient Lab 001 1" />
        <motion.div
          className="hero-gradient absolute h-[max(1316px,calc(100%+520px))] top-[-501px] w-[1969px]"
          data-node-id="5:629"
          aria-hidden="true"
          style={
            reduced
              ? undefined
              : {
                  y: gradientY,
                  scale: gradientScale,
                  opacity: gradientOpacity,
                  willChange: "transform, opacity",
                }
          }
        >
          <div className="absolute inset-[-8.72%_-9.83%_-17.79%_-8.51%]">
            <img alt="" className="block max-w-none size-full" width={2330} height={1649} src={heroGradient} />
          </div>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={showStickyNav || undefined}
          inert={showStickyNav}
          className="backdrop-blur-[calc(var(--effect-radius-16)/2)] bg-[var(--surface-canvas)] flex flex-col gap-[var(--space-0)] items-start p-[var(--space-0)] relative z-20 rounded-[var(--radius-14)] shrink-0 w-[1116px]"
          data-node-id="5:634"
          data-name="Header - Navigation"
        >
          <NavigationBar
            variant="hero"
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
            onMobileLinkClick={handleMobileLinkClick}
            onMobileLogIn={() => requestAnimationFrame(() => setMobileMenuOpen(false))}
            reduced={reduced}
          />
        </motion.div>
        <div className="flex flex-col gap-0 items-center p-[var(--space-0)] relative shrink-0 w-[1116px]" data-node-id="5:658" data-name="Hero · Content stack">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={reduced ? undefined : { y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
            className="flex flex-col gap-[var(--space-16)] items-center leading-[0] not-italic relative shrink-0 text-center w-[1116px]"
            data-node-id="5:659"
            data-name="Hero · Heading and description"
          >
            <h1 className="flex flex-col font-medium justify-center min-w-full relative shrink-0 text-[64px] text-[color:var(--text-inverse)] tracking-[-1.5px] w-[min-content]" data-node-id="5:660">
              <span className="block leading-[72px]">Only Time Tracker you Need</span>
            </h1>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[16px] text-[color:var(--text-inverse-muted)] w-[800px]" data-node-id="5:661">
              <p className="leading-[26px]">{`Track time effortlessly, manage projects, and turn your team's hours into meaningful insights.`}</p>
            </div>
          </motion.div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 42, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.88, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={
              reduced
                ? undefined
                : {
                    y: previewY,
                    scale: previewScale,
                    opacity: previewOpacity,
                    transformOrigin: "center top",
                    willChange: "transform, opacity",
                  }
            }
            className="hero-preview-frame mx-auto flex justify-center"
          >
            <ScaledPreview width={1008} maxWidth={1116} label="Time tracker dashboard">
              <HeroAnimatedDashboard />
            </ScaledPreview>
          </motion.div>
        </div>
      </header>
    </>
  );
}
