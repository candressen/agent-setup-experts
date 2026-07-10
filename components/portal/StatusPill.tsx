type Status = "active" | "idle" | "error" | "paused" | "trial";

const STATUS_STYLES: Record<
  Status,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  active: {
    label: "Active",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dotClassName: "bg-emerald-500",
  },
  idle: {
    label: "Idle",
    className: "border-amber-200 bg-amber-50 text-amber-700",
    dotClassName: "bg-amber-500",
  },
  error: {
    label: "Error",
    className: "border-red-200 bg-red-50 text-red-700",
    dotClassName: "bg-red-500",
  },
  paused: {
    label: "Paused",
    className: "border-slate-200 bg-slate-100 text-slate-600",
    dotClassName: "bg-slate-500",
  },
  trial: {
    label: "Trial",
    className: "border-violet-200 bg-violet-50 text-violet-700",
    dotClassName: "bg-violet-500",
  },
};

export type StatusPillProps = {
  status: Status;
  label?: string;
  className?: string;
};

export default function StatusPill({
  status,
  label,
  className = "",
}: StatusPillProps) {
  const styles = STATUS_STYLES[status];

  return (
    <span
      className={[
        "inline-flex min-h-7 items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        styles.className,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className={["h-2 w-2 rounded-full", styles.dotClassName].join(" ")}
      />
      <span>{label ?? styles.label}</span>
    </span>
  );
}
