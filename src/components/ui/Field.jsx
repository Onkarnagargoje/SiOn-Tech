export default function Field({
  label,
  id,
  as = 'input',
  className = '',
  ...props
}) {
  const Tag = as
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="mb-3.5 block text-sm font-bold uppercase tracking-[0.12em] text-brand-slate"
        >
          {label}
        </label>
      )}
      <Tag
        id={id}
        className="w-full rounded-2xl border border-brand-line bg-white px-5 py-4 text-base text-brand-ink outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 disabled:cursor-not-allowed disabled:bg-brand-mist disabled:opacity-70"
        {...props}
      />
    </div>
  )
}
