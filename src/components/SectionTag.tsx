interface SectionTagProps {
  label: string
}

const SectionTag = ({ label }: SectionTagProps) => (
  <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-3">
    <span className="w-5 h-px bg-accent" />
    {label}
  </div>
)

export default SectionTag
