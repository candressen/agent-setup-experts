import type { ReactNode } from "react";

type TrendDirection = "up" | "down" | "flat";
type Tone = "default" | "accent" | "success" | "warning";

type Trend = {
  direction: TrendDirection;
  value: string;
  label?: string;
};

export type MetricCardProps = {
  label: string;
  value: string;
  subtext?: string;
  trend?: Trend;
  icon?: ReactNode;
  tone?: Tone;
  className?: string;
};

const TONE_STYLES: Record<Tone, string> = {
  default: "from-white to-slate-50/60",
  accent: "from-blue-50 to-white",
  success: "from-emerald-50 to-white",
  warning: "from-amber-50 to-white",
};

const TREND_STYLES: Record<TrendDirection, string> = {
  up: "border-emerald-200 bg-emerald-50 text-emerald-700",
  down: "border-red-200 bg-red-50 text-red-700",
  flat: "border-slate-200 bg-slate-100 text-slate-600",
};

function TrendArrow({ direction }: { direction: TrendDirection }) {
  if (direction === "flat") {
    return <span aria-hidden="true">•</span>;
  }

  return (
    <svg
      aria-hidden="true"
      className={["h-3.5 w-3.5", direction === "down" ? "rotate-180" : ""].join(" ")}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 3.333l3.667 4.584H9.5V12.5h-3V7.917H4.333L8 3.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MetricCard({
  label,
  value,
  subtext,
  trend,
  icon,
  tone = "default",
  className = "",
}: MetricCardProps) {
  return (
    <section
      className={[
        "portal-card animate-fade-in-up bg-gradient-to-br",
        TONE_STYLES[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {label}
          </p>
        </div>
        {trend ? (
          <span
            className={[
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
              TREND_STYLES[trend.direction],
            ].join(" ")}
          >
            <TrendArrow direction={trend.direction} />
            <span>{trend.value}</span>
          </span>
        ) : icon ? (
          <span className="rounded-2xl bg-slate-900 p-2 text-white shadow-sm">{icon}</span>
        ) : null}
      </div>

      <div className="space-y-3">
        <div className="portal-metric-display text-metric-lg text-slate-950 md:text-metric-xl">
          {value}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-700">{label}</p>
          {subtext ? <p className="text-sm leading-6 text-slate-500">{subtext}</p> : null}
          {trend?.label ? <p className="text-xs text-slate-500">{trend.label}</p> : null}
        </div>
      </div>
    </section>
  );
}
