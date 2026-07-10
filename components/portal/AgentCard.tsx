import Link from "next/link";

import StatusPill from "@/components/portal/StatusPill";

type AgentStatus = "active" | "idle" | "error" | "paused" | "trial";

export type AgentCardProps = {
  name: string;
  description: string;
  status: AgentStatus;
  lastRun: string;
  metricLabel: string;
  metricValue: string;
  href: string;
  category?: string;
  trialLabel?: string;
  actionLabel?: string;
  className?: string;
};

export default function AgentCard({
  name,
  description,
  status,
  lastRun,
  metricLabel,
  metricValue,
  href,
  category,
  trialLabel,
  actionLabel = "Open details",
  className = "",
}: AgentCardProps) {
  return (
    <article
      className={[
        "portal-card animate-fade-in-up flex h-full flex-col justify-between gap-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {category ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {category}
              </p>
            ) : null}
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{name}</h3>
              {trialLabel ? (
                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                  {trialLabel}
                </span>
              ) : null}
            </div>
          </div>
          <StatusPill status={status} />
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Last run
            </p>
            <p className="portal-tabular text-sm font-medium text-slate-800">{lastRun}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {metricLabel}
            </p>
            <p className="portal-metric-display text-2xl text-slate-950">{metricValue}</p>
          </div>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <span>{actionLabel}</span>
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3.333L10.667 8 6 12.667"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
