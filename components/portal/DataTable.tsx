"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type CellAlignment = "left" | "center" | "right";
type SortDirection = "asc" | "desc";

export type DataTableColumn<T extends Record<string, unknown>> = {
  key: keyof T & string;
  header: string;
  sortable?: boolean;
  align?: CellAlignment;
  className?: string;
  render?: (row: T) => ReactNode;
  csvValue?: (row: T) => string | number | null | undefined;
};

export type DataTableProps<T extends Record<string, unknown>> = {
  title?: string;
  description?: string;
  columns: DataTableColumn<T>[];
  data: T[];
  exportFileName?: string;
  initialSortKey?: keyof T & string;
  initialSortDirection?: SortDirection;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  emptyState?: string;
  className?: string;
};

function getAlignmentClass(align: CellAlignment = "left") {
  if (align === "center") {
    return "text-center";
  }

  if (align === "right") {
    return "text-right";
  }

  return "text-left";
}

function getSortableValue(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "boolean") {
    return value ? 1 : 0;
  }

  return String(value ?? "").toLowerCase();
}

function toCsvCell(value: string | number | null | undefined) {
  const normalized = String(value ?? "");
  return `"${normalized.replace(/"/g, '""')}"`;
}

export default function DataTable<T extends Record<string, unknown>>({
  title,
  description,
  columns,
  data,
  exportFileName = "portal-export.csv",
  initialSortKey,
  initialSortDirection = "desc",
  initialPageSize = 10,
  pageSizeOptions = [10, 20, 50],
  emptyState = "No rows to display yet.",
  className = "",
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T & string | null>(initialSortKey ?? null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const maxPage = Math.max(1, Math.ceil(data.length / pageSize));
    if (page > maxPage) {
      setPage(maxPage);
    }
  }, [data.length, page, pageSize]);

  const sortedData = [...data];

  if (sortKey) {
    sortedData.sort((left, right) => {
      const leftValue = getSortableValue(left[sortKey]);
      const rightValue = getSortableValue(right[sortKey]);

      if (leftValue < rightValue) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (leftValue > rightValue) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });
  }

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const pageStart = (page - 1) * pageSize;
  const pageRows = sortedData.slice(pageStart, pageStart + pageSize);

  function handleSort(columnKey: keyof T & string) {
    if (sortKey === columnKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(columnKey);
    setSortDirection("desc");
  }

  function exportCsv() {
    const header = columns.map((column) => toCsvCell(column.header)).join(",");
    const rows = sortedData.map((row) =>
      columns
        .map((column) => {
          const rawValue = column.csvValue ? column.csvValue(row) : row[column.key];
          return toCsvCell(
            typeof rawValue === "string" || typeof rawValue === "number"
              ? rawValue
              : String(rawValue ?? "")
          );
        })
        .join(",")
    );

    const blob = new Blob([[header, ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className={["portal-table-shell", className].filter(Boolean).join(" ")}>
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          {title ? <h3 className="text-lg font-semibold text-slate-950">{title}</h3> : null}
          {description ? (
            <p className="max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex items-center gap-2 text-sm text-slate-500">
            <span>Rows</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setPage(1);
              }}
              className="portal-input min-h-11 w-auto pr-8"
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={exportCsv} className="portal-button-secondary">
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2.667v6.666m0 0l2.667-2.666M8 9.333L5.333 6.667M3.333 11.333v1.334h9.334v-1.334"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="portal-table-header">
            <tr>
              {columns.map((column) => {
                const isActiveSort = sortKey === column.key;
                const alignmentClass = getAlignmentClass(column.align);
                return (
                  <th
                    key={column.key}
                    scope="col"
                    className={[
                      "border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]",
                      alignmentClass,
                    ].join(" ")}
                  >
                    {column.sortable ? (
                      <button
                        type="button"
                        onClick={() => handleSort(column.key)}
                        className={[
                          "inline-flex items-center gap-2 transition",
                          alignmentClass === "text-right"
                            ? "ml-auto"
                            : alignmentClass === "text-center"
                              ? "mx-auto"
                              : "",
                          isActiveSort ? "text-blue-600" : "text-slate-500 hover:text-slate-700",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span>{column.header}</span>
                        <svg
                          aria-hidden="true"
                          className={[
                            "h-3.5 w-3.5 transition",
                            isActiveSort && sortDirection === "asc" ? "rotate-180" : "",
                          ].join(" ")}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4.667 6.667L8 10l3.333-3.333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    ) : (
                      <span>{column.header}</span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-16 text-center text-sm text-slate-500"
                >
                  {emptyState}
                </td>
              </tr>
            ) : (
              pageRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white transition hover:bg-slate-50/80">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={[
                        "border-b border-slate-200 px-6 py-4 text-sm text-slate-700 last:border-b-0",
                        getAlignmentClass(column.align),
                        column.className ?? "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {column.render ? column.render(row) : String(row[column.key] ?? "—")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p className="portal-tabular">
          Showing {pageRows.length === 0 ? 0 : pageStart + 1}-{pageStart + pageRows.length} of{" "}
          {sortedData.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="portal-button-secondary min-h-10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="portal-tabular rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page === totalPages}
            className="portal-button-secondary min-h-10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
