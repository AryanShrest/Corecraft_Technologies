const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your business needs and project goals.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Crafting the perfect strategy and technical roadmap.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Building your solution with modern applications.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver & Support',
    desc: 'Launching your product with continuous support and maintenance.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
]

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold text-primary-600 tracking-[0.25em] uppercase mb-4">
            <span className="w-10 h-px bg-primary-400" />
            HOW WE WORK
            <span className="w-10 h-px bg-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Idea To The Execution
          </h2>
        </div>

        <div className="relative">
          {/* Line connector (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {STEPS.map((s, i) => (
              <div key={s.num} className="relative text-center group">
                {/* Step num badge */}
                <div className="text-[88px] font-black text-primary-50/80 absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none">
                  {s.num}
                </div>
                {/* Icon circle */}
                <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-100 text-primary-700 flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white group-hover:border-primary-700 group-hover:shadow-xl group-hover:shadow-primary-200 transition-all duration-300">
                  {s.icon}
                </div>
                {/* Connector dot on line */}
                <div className="hidden lg:block absolute top-[108px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-md z-20" />

                <div className="mt-8 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
