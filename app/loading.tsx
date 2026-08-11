export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white gap-5"
      aria-label="Loading page content"
      role="status"
    >
      {/* Branded spinner */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-navy-100" aria-hidden />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent
                        border-t-gold-500 animate-spin" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-6 h-6 bg-navy-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-extrabold text-[0.75rem] leading-none">A</span>
          </span>
        </div>
      </div>
      <p className="text-navy-400 text-[0.8125rem] font-body tracking-wide">Loading…</p>
    </div>
  )
}
