import ProjectsPreview from "@/src/components/previews/projects-preview";
import ReportsPreview from "@/src/components/previews/reports-preview";
import { ShowcaseTabs } from "@/src/components/showcase-tabs";
import { ScaledPreview } from "@/src/components/scaled-preview";
import { ScrollReveal } from "@/src/components/scroll-effects";

export default function Section05InteractiveProductShowcase() {
  return (
    <section id="showcase" className="page-section bg-[var(--surface-canvas)] flex flex-col gap-[var(--space-48)] items-center px-[var(--space-162)] py-[var(--space-96)] relative size-full" data-node-id="5:1052" data-name="Section 05 · Interactive product showcase">
      <ScrollReveal className="w-[1116px] max-w-full">
      <div className="flex flex-col gap-[var(--space-32)] items-center overflow-clip p-[var(--space-0)] relative shrink-0 w-[1116px]" data-node-id="5:1053" data-name="Showcase heading and tabs">
        <div className="flex flex-col gap-[var(--space-16)] items-center not-italic overflow-clip p-[var(--space-0)] relative shrink-0 text-center w-[1116px]" data-node-id="5:1054" data-name="Showcase · Heading and description">
          <h2 className="font-medium leading-[56px] relative shrink-0 text-[44px] text-[color:var(--text-primary)] tracking-[-1px] w-[1116px]" data-node-id="5:1055">
            A clearer view of your workday.
          </h2>
          <p className="font-normal leading-[26px] relative shrink-0 text-[16px] text-[color:var(--text-secondary)] w-[760px]" data-node-id="5:1056">
            Everything you need to track progress, manage projects, and understand performance beautifully organized in one place.
          </p>
        </div>
      </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1} className="w-full flex flex-col items-center gap-[clamp(28px,4vw,48px)]">
      <ShowcaseTabs
        projects={<ScaledPreview width={1116} label="Projects dashboard with active projects, tracked hours and budget utilization"><ProjectsPreview /></ScaledPreview>}
        reports={<ScaledPreview width={1116} label="Reports dashboard with weekly hours, time by project and billable breakdown"><ReportsPreview /></ScaledPreview>}
      >
      <ScaledPreview width={1116} label="Weekly timesheet dashboard">
      <div className="bg-[var(--surface-subtle-variant-10)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-11)] border-solid h-[738px] overflow-clip relative rounded-[var(--radius-24)] shrink-0 w-[1116px]" data-node-id="5:1064" data-name="Time Tracking · Product preview">
        <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-12)] border-solid h-[690px] left-[15px] overflow-clip rounded-[var(--radius-12)] top-[23px] w-[1084px]" data-node-id="5:1065" data-name="Timeflow · Weekly timesheet">
          <div className="absolute bg-[var(--surface-canvas-variant-02)] flex flex-col gap-[var(--space-25-379311)] h-[690px] items-start left-[-1px] overflow-clip pb-[var(--space-19-034483)] pt-[var(--space-25-379311)] px-[var(--space-16-91954)] top-[-1px] w-[184px]" data-node-id="5:1066" data-name="Workspace navigation">
            <img
              src="/assets/aistudio/Group_3_b607dbfb.svg"
              alt="timeflow"
              width={110}
              height={22}
              className="block h-[22px] w-[110px] shrink-0"
              data-node-id="5:1067"
            />
            <div className="flex flex-col gap-[var(--space-6-344828)] items-start leading-[normal] not-italic overflow-clip p-[var(--space-0)] relative shrink-0" data-node-id="5:1068" data-name="Studio workspace">
              <p className="font-semibold relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-8-45977)] whitespace-nowrap" data-node-id="5:1069">
                WORKSPACE
              </p>
              <p className="font-medium relative shrink-0 text-[color:var(--text-primary)] text-[length:var(--type-size-11-632184)] whitespace-pre" data-node-id="5:1070">{`Studio workspace  ⌄`}</p>
            </div>
            <div className="flex flex-col gap-[var(--space-8-45977)] items-start overflow-clip p-[var(--space-0)] relative shrink-0 w-[150.161px]" data-node-id="5:1071" data-name="App navigation">
              <div className="flex gap-[var(--space-0)] h-[38.069px] items-center overflow-clip pl-[var(--space-12-689655)] pr-[var(--space-0)] py-[var(--space-0)] relative rounded-[var(--radius-7-402299)] shrink-0 w-[150.161px]" data-node-id="5:1072" data-name="Time tracker">
                <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-11-632184)] whitespace-nowrap" data-node-id="5:1073">
                  Time tracker
                </p>
              </div>
              <div className="bg-[var(--action-primary-variant-02)] flex gap-[var(--space-0)] h-[38.069px] items-center overflow-clip pl-[var(--space-12-689655)] pr-[var(--space-0)] py-[var(--space-0)] relative rounded-[var(--radius-7-402299)] shrink-0 w-[150.161px]" data-node-id="5:1074" data-name="Timesheet">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-inverse)] text-[length:var(--type-size-11-632184)] whitespace-nowrap" data-node-id="5:1075">
                  Timesheet
                </p>
              </div>
              <div className="flex gap-[var(--space-0)] h-[38.069px] items-center overflow-clip pl-[var(--space-12-689655)] pr-[var(--space-0)] py-[var(--space-0)] relative rounded-[var(--radius-7-402299)] shrink-0 w-[150.161px]" data-node-id="5:1076" data-name="Projects">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-11-632184)] whitespace-nowrap" data-node-id="5:1077">
                  Projects
                </p>
              </div>
              <div className="flex gap-[var(--space-0)] h-[38.069px] items-center overflow-clip pl-[var(--space-12-689655)] pr-[var(--space-0)] py-[var(--space-0)] relative rounded-[var(--radius-7-402299)] shrink-0 w-[150.161px]" data-node-id="5:1078" data-name="Team">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-11-632184)] whitespace-nowrap" data-node-id="5:1079">
                  Team
                </p>
              </div>
              <div className="flex gap-[var(--space-0)] h-[38.069px] items-center overflow-clip pl-[var(--space-12-689655)] pr-[var(--space-0)] py-[var(--space-0)] relative rounded-[var(--radius-7-402299)] shrink-0 w-[150.161px]" data-node-id="5:1080" data-name="Reports">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-11-632184)] whitespace-nowrap" data-node-id="5:1081">
                  Reports
                </p>
              </div>
            </div>
            <div className="bg-[var(--surface-subtle)] flex flex-col gap-[var(--space-8-45977)] items-start overflow-clip p-[var(--space-12-689655)] relative rounded-[var(--radius-8-45977)] shrink-0 w-[150.161px]" data-node-id="5:1082" data-name="Trial reminder">
              <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[color:var(--text-primary)] text-[length:var(--type-size-10-574713)] whitespace-nowrap" data-node-id="5:1083">
                Make every hour count
              </p>
              <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-9-517241)] whitespace-nowrap" data-node-id="5:1084">
                Your trial has 23 days left
              </p>
              <div className="bg-[var(--accent-highlight-variant-02)] flex gap-[var(--space-0)] items-center overflow-clip px-[var(--space-10-574713)] py-[var(--space-6-344828)] relative rounded-[var(--radius-6-344828)] shrink-0" data-node-id="5:1085" data-name="Explore plans">
                <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[color:var(--text-primary)] text-[length:var(--type-size-10-574713)] whitespace-nowrap" data-node-id="5:1086">
                  Explore plans
                </p>
              </div>
            </div>
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--text-muted)] text-[length:var(--type-size-10-574713)] whitespace-nowrap" data-node-id="5:1087">
              Workspace settings
            </p>
          </div>
          <div className="absolute bg-[var(--surface-canvas)] h-[690px] left-[183px] overflow-clip top-[-1px] w-[900px]" data-node-id="5:1088" data-name="Weekly timesheet workspace">
            <p className="absolute font-semibold h-[34px] leading-[var(--type-line-height-32)] left-[28px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-24)] top-[26px] w-[450px]" data-node-id="5:1089">
              Timesheet
            </p>
            <p className="absolute font-normal h-[17px] leading-[var(--type-line-height-17)] left-[28px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-12)] top-[65px] w-[500px]" data-node-id="5:1090">
              Your week, at a glance. Every hour accounted for.
            </p>
            <div className="absolute bg-[var(--action-primary-variant-02)] border-[length:var(--border-width-1)] border-[var(--border-strong)] border-solid h-[34px] left-[756px] overflow-clip rounded-[var(--radius-6)] top-[30px] w-[116px]" data-node-id="5:1091" data-name="+ Add time">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[57px] not-italic text-[color:var(--text-inverse)] text-[length:var(--type-size-12)] text-center top-[7px] w-[116px]" data-node-id="5:1092">
                + Add time
              </p>
            </div>
            <div className="absolute bg-[var(--surface-subtle-variant-02)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[94px] left-[28px] not-italic overflow-clip rounded-[var(--radius-8)] top-[110px] w-[272px]" data-node-id="5:1093" data-name="Tracked this week">
              <p className="absolute font-normal h-[16px] leading-[var(--type-line-height-16)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-11)] top-[11px] w-[230px]" data-node-id="5:1094">
                Tracked this week
              </p>
              <p className="absolute font-medium h-[35px] leading-[var(--type-line-height-32)] left-[15px] text-[color:var(--text-primary)] text-[length:var(--type-size-25)] top-[30px] w-[230px]" data-node-id="5:1095">
                38h 00m
              </p>
              <p className="absolute font-normal h-[14px] leading-[var(--type-line-height-14)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-10)] top-[67px] w-[230px]" data-node-id="5:1096">
                Across 4 active projects
              </p>
            </div>
            <div className="absolute bg-[var(--surface-canvas-variant-05)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[94px] left-[314px] not-italic overflow-clip rounded-[var(--radius-8)] top-[110px] w-[272px]" data-node-id="5:1097" data-name="Billable time">
              <p className="absolute font-normal h-[16px] leading-[var(--type-line-height-16)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-11)] top-[11px] w-[230px]" data-node-id="5:1098">
                Billable time
              </p>
              <p className="absolute font-medium h-[35px] leading-[var(--type-line-height-32)] left-[15px] text-[color:var(--text-primary)] text-[length:var(--type-size-25)] top-[30px] w-[230px]" data-node-id="5:1099">
                34h 00m
              </p>
              <p className="absolute font-normal h-[14px] leading-[var(--type-line-height-14)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-10)] top-[67px] w-[230px]" data-node-id="5:1100">
                89.5% of tracked time
              </p>
            </div>
            <div className="absolute bg-[var(--surface-canvas-variant-05)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[94px] left-[600px] not-italic overflow-clip rounded-[var(--radius-8)] top-[110px] w-[272px]" data-node-id="5:1101" data-name="Non-billable time">
              <p className="absolute font-normal h-[16px] leading-[var(--type-line-height-16)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-11)] top-[11px] w-[230px]" data-node-id="5:1102">
                Non-billable time
              </p>
              <p className="absolute font-medium h-[35px] leading-[var(--type-line-height-32)] left-[15px] text-[color:var(--text-primary)] text-[length:var(--type-size-25)] top-[30px] w-[230px]" data-node-id="5:1103">
                4h 00m
              </p>
              <p className="absolute font-normal h-[14px] leading-[var(--type-line-height-14)] left-[15px] text-[color:var(--text-muted)] text-[length:var(--type-size-10)] top-[67px] w-[230px]" data-node-id="5:1104">{`Team & operations`}</p>
            </div>
            <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid left-[28px] overflow-clip rounded-[var(--radius-6)] size-[30px] top-[224px]" data-node-id="5:1105" data-name="‹">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[14px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[5px] w-[30px]" data-node-id="5:1106">
                ‹
              </p>
            </div>
            <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid left-[64px] overflow-clip rounded-[var(--radius-6)] size-[30px] top-[224px]" data-node-id="5:1107" data-name="›">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[14px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[5px] w-[30px]" data-node-id="5:1108">
                ›
              </p>
            </div>
            <p className="absolute font-medium h-[19px] leading-[var(--type-line-height-20)] left-[108px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-13)] top-[229px] w-[230px]" data-node-id="5:1109">
              May 12–18, 2025
            </p>
            <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[30px] left-[352px] overflow-clip rounded-[var(--radius-6)] top-[224px] w-[88px]" data-node-id="5:1110" data-name="This week">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[43px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[5px] w-[88px]" data-node-id="5:1111">
                This week
              </p>
            </div>
            <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[30px] left-[716px] overflow-clip rounded-[var(--radius-6)] top-[224px] w-[156px]" data-node-id="5:1112" data-name="My timesheet  ⌄">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[77px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[5px] w-[156px] whitespace-pre-wrap" data-node-id="5:1113">{`My timesheet  ⌄`}</p>
            </div>
            <div className="absolute bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle-variant-10)] border-solid h-[344px] left-[28px] overflow-clip rounded-[var(--radius-8)] top-[272px] w-[844px]" data-node-id="5:1114" data-name="Weekly project hours · Monday to Sunday">
              <div className="absolute bg-[var(--surface-canvas-variant-06)] h-[52px] left-[-1px] rounded-[var(--radius-8)] top-[-1px] w-[844px]" data-node-id="5:1115" data-name="Column headings" />
              <p className="absolute font-semibold h-[14px] leading-[var(--type-line-height-14)] left-[15px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-10)] top-[17px] w-[190px]" data-node-id="5:1116">
                PROJECT
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[250px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1117">
                MON
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1118">
                12
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[328px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1119">
                TUE
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1120">
                13
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[406px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1121">
                WED
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1122">
                14
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[484px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1123">
                THU
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[484px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1124">
                15
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[562px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1125">
                FRI
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1126">
                16
              </p>
              <div className="absolute bg-[var(--surface-canvas-variant-05)] h-[344px] left-[601px] top-[-1px] w-[78px]" data-node-id="5:1127" data-name="SAT weekend" />
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[640px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1128">
                SAT
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[640px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1129">
                17
              </p>
              <div className="absolute bg-[var(--surface-canvas-variant-05)] h-[344px] left-[679px] top-[-1px] w-[78px]" data-node-id="5:1130" data-name="SUN weekend" />
              <p className="-translate-x-1/2 absolute font-medium h-[13px] leading-[var(--type-line-height-13)] left-[718px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] text-center top-[8px] w-[78px]" data-node-id="5:1131">
                SUN
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[16px] leading-[var(--type-line-height-16)] left-[718px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-11)] text-center top-[25px] w-[78px]" data-node-id="5:1132">
                18
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[14px] leading-[var(--type-line-height-14)] left-[800px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-10)] text-center top-[17px] w-[86px]" data-node-id="5:1133">
                TOTAL
              </p>
              <div className="absolute bg-[var(--surface-subtle-variant-11)] h-px left-[-1px] top-[51px] w-[844px]" data-node-id="5:1134" data-name="Website redesign divider" />
              <div className="absolute bg-[var(--action-primary-variant-02)] h-[25px] left-[15px] rounded-[var(--radius-2)] top-[69px] w-[4px]" data-node-id="5:1135" data-name="Website redesign project marker" />
              <p className="absolute font-medium h-[17px] leading-[var(--type-line-height-17)] left-[29px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] top-[61px] w-[180px]" data-node-id="5:1136">
                Website redesign
              </p>
              <p className="absolute font-normal h-[13px] leading-[var(--type-line-height-14)] left-[29px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] top-[82px] w-[180px] whitespace-pre-wrap" data-node-id="5:1137">{`Acme Studio  ·  Billable`}</p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1138">
                4.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1139">
                3.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1140">
                4.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[484px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1141">
                3.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1142">
                2.00
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[640px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1143">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[718px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[71px] w-[78px]" data-node-id="5:1144">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[800px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[71px] w-[86px]" data-node-id="5:1145">
                16.00
              </p>
              <div className="absolute bg-[var(--surface-subtle-variant-11)] h-px left-[-1px] top-[111px] w-[844px]" data-node-id="5:1146" data-name="Mobile app divider" />
              <div className="absolute bg-[var(--accent-lavender-variant-04)] h-[25px] left-[15px] rounded-[var(--radius-2)] top-[129px] w-[4px]" data-node-id="5:1147" data-name="Mobile app project marker" />
              <p className="absolute font-medium h-[17px] leading-[var(--type-line-height-17)] left-[29px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] top-[121px] w-[180px]" data-node-id="5:1148">
                Mobile app
              </p>
              <p className="absolute font-normal h-[13px] leading-[var(--type-line-height-14)] left-[29px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] top-[142px] w-[180px] whitespace-pre-wrap" data-node-id="5:1149">{`Northstar  ·  Billable`}</p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1150">
                2.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1151">
                3.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1152">
                2.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[484px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1153">
                2.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1154">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[640px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1155">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[718px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[131px] w-[78px]" data-node-id="5:1156">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[800px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[131px] w-[86px]" data-node-id="5:1157">
                10.00
              </p>
              <div className="absolute bg-[var(--surface-subtle-variant-11)] h-px left-[-1px] top-[171px] w-[844px]" data-node-id="5:1158" data-name="Brand refresh divider" />
              <div className="absolute bg-[var(--accent-highlight-variant-04)] h-[25px] left-[15px] rounded-[var(--radius-2)] top-[189px] w-[4px]" data-node-id="5:1159" data-name="Brand refresh project marker" />
              <p className="absolute font-medium h-[17px] leading-[var(--type-line-height-17)] left-[29px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] top-[181px] w-[180px]" data-node-id="5:1160">
                Brand refresh
              </p>
              <p className="absolute font-normal h-[13px] leading-[var(--type-line-height-14)] left-[29px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] top-[202px] w-[180px] whitespace-pre-wrap" data-node-id="5:1161">{`Orbit  ·  Billable`}</p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1162">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1163">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1164">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[484px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1165">
                2.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1166">
                3.00
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[640px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1167">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[718px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[191px] w-[78px]" data-node-id="5:1168">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[800px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[191px] w-[86px]" data-node-id="5:1169">
                8.00
              </p>
              <div className="absolute bg-[var(--surface-subtle-variant-11)] h-px left-[-1px] top-[231px] w-[844px]" data-node-id="5:1170" data-name="Team & operations divider" />
              <div className="absolute bg-[var(--accent-lavender-variant-05)] h-[25px] left-[15px] rounded-[var(--radius-2)] top-[249px] w-[4px]" data-node-id="5:1171" data-name="Team & operations project marker" />
              <p className="absolute font-medium h-[17px] leading-[var(--type-line-height-17)] left-[29px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] top-[241px] w-[180px]" data-node-id="5:1172">{`Team & operations`}</p>
              <p className="absolute font-normal h-[13px] leading-[var(--type-line-height-14)] left-[29px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-9)] top-[262px] w-[180px] whitespace-pre-wrap" data-node-id="5:1173">{`Studio workspace  ·  Non-billable`}</p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1174">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1175">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1176">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[484px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1177">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1178">
                1.00
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[640px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1179">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-normal h-[17px] leading-[var(--type-line-height-18)] left-[718px] not-italic text-[color:var(--text-inverse-muted-variant-02)] text-[length:var(--type-size-12)] text-center top-[251px] w-[78px]" data-node-id="5:1180">
                —
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[800px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[251px] w-[86px]" data-node-id="5:1181">
                4.00
              </p>
              <div className="absolute bg-[var(--surface-subtle-variant-12)] h-[52px] left-[-1px] top-[291px] w-[844px]" data-node-id="5:1182" data-name="Weekly totals background" />
              <p className="absolute font-semibold h-[17px] leading-[var(--type-line-height-17)] left-[15px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] top-[309px] w-[180px]" data-node-id="5:1183">
                Total hours
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[250px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1184">
                8.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[328px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1185">
                8.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[406px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1186">
                8.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[484px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1187">
                7.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[562px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1188">
                7.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[640px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1189">
                0.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[17px] leading-[var(--type-line-height-18)] left-[718px] not-italic text-[color:var(--text-primary)] text-[length:var(--type-size-12)] text-center top-[309px] w-[78px]" data-node-id="5:1190">
                0.00
              </p>
              <p className="-translate-x-1/2 absolute font-semibold h-[19px] leading-[var(--type-line-height-18)] left-[800px] not-italic text-[color:var(--text-accent)] text-[length:var(--type-size-13)] text-center top-[309px] w-[86px]" data-node-id="5:1191">
                38.00
              </p>
            </div>
            <p className="absolute font-medium h-[14px] leading-[var(--type-line-height-14)] left-[28px] not-italic text-[color:var(--text-success)] text-[length:var(--type-size-10)] top-[638px] w-[240px] whitespace-pre-wrap" data-node-id="5:1192">{`●  All changes saved`}</p>
            <p className="-translate-x-1/2 absolute font-normal h-[14px] leading-[var(--type-line-height-14)] left-[430px] not-italic text-[color:var(--text-muted)] text-[length:var(--type-size-10)] text-center top-[638px] w-[260px]" data-node-id="5:1193">
              Time shown in decimal hours
            </p>
            <div className="absolute bg-[var(--action-primary-variant-02)] border-[length:var(--border-width-1)] border-[var(--border-strong)] border-solid h-[34px] left-[724px] overflow-clip rounded-[var(--radius-6)] top-[630px] w-[148px]" data-node-id="5:1194" data-name="Submit week  →">
              <p className="-translate-x-1/2 absolute font-medium h-[17px] leading-[var(--type-line-height-18)] left-[73px] not-italic text-[color:var(--text-inverse)] text-[length:var(--type-size-12)] text-center top-[7px] w-[148px] whitespace-pre-wrap" data-node-id="5:1195">{`Submit week  →`}</p>
            </div>
          </div>
        </div>
      </div>
      </ScaledPreview>
      </ShowcaseTabs>
      </ScrollReveal>
      <p className="font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text-secondary)] text-center w-[1116px]" data-node-id="5:1196">
        Your time. Your projects. The full picture.
      </p>
      <div className="flex flex-wrap gap-[var(--space-12)] min-h-[56px] h-auto items-center justify-center overflow-clip p-[var(--space-0)] relative shrink-0 max-w-full w-[620px]" data-node-id="5:1197" data-name="Hero CTA pair">
        <button type="button" data-preview-action="Start a free trial" className="bg-[var(--accent-highlight-variant-02)] flex font-medium gap-[var(--space-14)] h-[56px] items-center justify-center not-italic overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 text-[color:var(--text-primary)] w-[194px]" data-node-id="5:1198" data-name="Start my free trial">
          <p className="leading-[24px] relative shrink-0 text-[16px] w-[110px]" data-node-id="5:1199">
            Start free trial
          </p>
          <p className="leading-[28px] relative shrink-0 text-[20px] w-[12px]" data-node-id="5:1200">
            →
          </p>
        </button>
        <button type="button" data-preview-action="Watch demo" className="bg-[var(--surface-canvas)] border-[length:var(--border-width-1)] border-[var(--border-subtle)] border-solid flex gap-[var(--space-14)] h-[56px] items-center justify-center overflow-clip p-[var(--space-0)] relative rounded-[var(--radius-12)] shrink-0 w-[180px]" data-name="Watch demo">
          <p className="font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary)] text-center">
            Watch demo
          </p>
        </button>
      </div>
    </section>
  );
}
