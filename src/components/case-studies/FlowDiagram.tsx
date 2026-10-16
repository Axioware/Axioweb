interface FlowDiagramProps {
  nodes: string[];
  compact?: boolean;
}

export default function FlowDiagram({ nodes, compact = false }: FlowDiagramProps) {
  const textAlternative = `Process flow: ${nodes.join(", then ")}`;

  return (
    <div
      role="img"
      aria-label={textAlternative}
      className={`w-full ${compact ? "aspect-[4/5]" : "min-h-40"} rounded-xl border border-border/50 bg-background p-4 md:p-6 flex items-center justify-center`}
    >
      <ol className="w-full flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center gap-2 lg:gap-1">
        {nodes.map((node, index) => (
          <li key={`${node}-${index}`} className="flex flex-col lg:flex-row items-center gap-2 min-w-0 lg:flex-1">
            <span className={`w-full ${compact ? "min-h-8 px-2 py-1 text-xs" : "min-h-14 px-3 py-2 text-sm"} flex items-center justify-center text-center rounded-lg border border-primary/30 bg-card font-medium leading-snug text-foreground`}>
              {node}
            </span>
            {index < nodes.length - 1 && (
              <span aria-hidden="true" className="text-primary text-lg leading-none rotate-90 lg:rotate-0">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
