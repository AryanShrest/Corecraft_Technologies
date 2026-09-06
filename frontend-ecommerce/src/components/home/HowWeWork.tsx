const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your business needs and project goals.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>search icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Crafting the perfect strategy and technical roadmap.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>plan icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Building your solution with modern applications.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>develop icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver & Support',
    desc: 'Launching your product with continuous support and maintenance.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>support icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
]

export default function HowWeWork() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
            <span className="h-px w-10 bg-primary-400" />
            HOW WE WORK
            <span className="h-px w-10 bg-primary-400" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            From Idea To The Execution
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden lg:block">
            <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.num} className="group relative flex flex-col items-center px-4 pt-4 text-center">
                <div className="relative flex h-28 w-full items-center justify-center">
                  <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 select-none text-[64px] font-black leading-none text-primary-50/80 sm:text-[72px] lg:text-[88px]">
                    {s.num}
                  </div>

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-blue-50 text-primary-700 shadow-sm transition-all duration-300 group-hover:border-primary-700 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white group-hover:shadow-xl group-hover:shadow-primary-200">
                    {s.icon}
                  </div>

                  <div className="absolute top-[86px] left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary-500 shadow-md lg:block" />
                </div>

                <div className="mt-3 max-w-[220px] space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
