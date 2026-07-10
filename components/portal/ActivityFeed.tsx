type ActivityTone = "success" | "warning" | "error" | "info" | "run";

export type ActivityFeedItem = {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  tone?: ActivityTone;
  meta?: string;
};

export type ActivityFeedProps = {
  title?: string;
  items: ActivityFeedItem[];
  className?: string;
};

const TONE_STYLES: Record<ActivityTone, string> = {
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  error: "bg-red-50 text-red-700 ring-1 ring-red-200",
  info: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  run: "bg-slate-900 text-white ring-1 ring-slate-800",
};

function EventIcon({ tone }: { tone: ActivityTone }) {
  if (tone === "success") {
    return (
      <path
        d="M4 8.167L6.667 10.5 12 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    );
  }

  if (tone === "warning") {
    return (
      <>
        <path
          d="M8 4.5v3.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="10.75" r="0.75" fill="currentColor" />
      </>
    );
  }

  if (tone === "error") {
    return <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />;
  }

  if (tone === "run") {
    return <path d="M6 5l5 3-5 3V5z" fill="currentColor" />;
  }

  return (
    <path
      d="M8 5v3.25l2.25 1.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  );
}

export default function ActivityFeed({
  title = "Recent activity",
  items,
  className = "",
}: ActivityFeedProps) {
  return (
    <section className={["portal-card", className].filter(Boolean).join(" ")}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
          <p className="text-sm text-slate-500">Agent runs, handoffs, and delivery events.</p>
        </div>
      </div>

      <div className="relative pl-4">
        <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-0 w-px bg-slate-200" />

        <div className="space-y-5">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-sm text-slate-500">
              No activity yet. New agent events will appear here as tasks start running.
            </div>
          ) : (
            items.map((item) => {
              const tone = item.tone ?? "info";
              return (
                <article
                  key={item.id}
                  className="relative grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[auto,1fr,auto] md:items-start"
                >
                  <span
                    className={[
                      "relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full",
                      TONE_STYLES[tone],
                    ].join(" ")}
                  >
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <EventIcon tone={tone} />
                    </svg>
                  </span>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold text-slate-950">{item.title}</h4>
                      {item.meta ? (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                          {item.meta}
                        </span>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                    ) : null}
                  </div>

                  <time className="portal-tabular text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    {item.timestamp}
                  </time>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
