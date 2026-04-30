export function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono uppercase text-[11px] tracking-[0.25em] text-brote">
        / {label}
      </span>
      <span className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
    </div>
  );
}
