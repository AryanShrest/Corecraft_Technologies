import Link from 'next/link'

const serviceImg = (keyword: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    `${keyword} professional corporate office scene with team working laptops blue lighting, high quality photorealistic`
  )}&image_size=landscape_4_3`

const SERVICES = [
  {
    title: 'Website Development',
    desc: 'Crafting modern, responsive, and user-friendly websites tailored to business needs.',
    tag: '01',
    img: serviceImg('Web developers team coding modern'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>website icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
  },
  {
    title: 'Digital Marketing',
    desc: 'Helping businesses grow through SEO, social media, and digital advertising strategies.',
    tag: '02',
    img: serviceImg('Digital marketing team analytics dashboard'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>marketing icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    ),
  },
  {
    title: 'UI / UX & Graphic Design',
    desc: 'Designing attractive, user-focused interfaces and creative visuals for better user experience.',
    tag: '03',
    img: serviceImg('UI UX designers creative agency workspace'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>design icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'Building powerful and user-friendly mobile applications for Android and iOS platforms.',
    tag: '04',
    img: serviceImg('Mobile app developers testing smartphones'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>mobile icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: 'Software Development',
    desc: 'Building custom solutions and automated software systems for efficient business operations.',
    tag: '05',
    img: serviceImg('Software engineers coding servers backend'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>software icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M38.5 18.5L17 5v14l21.5-2.5zM9.5 5.5v14L31 18V6L9.5 5.5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
  },
  {
    title: 'Cloud & Hosting Services',
    desc: 'Providing secure, reliable cloud services, server management, and scalable performance.',
    tag: '06',
    img: serviceImg('Cloud infrastructure server engineers data'),
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>cloud icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
            <span className="h-px w-10 bg-primary-400" />
            OUR BEST SERVICES
            <span className="h-px w-10 bg-primary-400" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            We Deliver Services That Grow Your Business
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-100"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-1/2 bottom-0 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-2xl border-4 border-white bg-white text-primary-700 shadow-xl shadow-black/10 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  {s.icon}
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/80 backdrop-blur">
                  {s.tag}
                </div>
              </div>

              <div className="px-6 pb-7 pt-12 text-center">
                <h3 className="mb-2 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mb-5 min-h-[60px] text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 transition-colors hover:text-primary-800"
                >
                  Read More
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>arrow right</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
