import Link from 'next/link'
import Image from 'next/image'

const HERO_IMG =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20diverse%20business%20team%20of%20three%20people%20collaborating%20in%20modern%20office%2C%20one%20caucasian%20bearded%20man%20with%20folder%2C%20one%20african%20american%20woman%20with%20notebook%2C%20friendly%20corporate%20photography%2C%20blue%20lighting%20atmosphere%2C%20high%20quality%20photo&image_size=landscape_4_3'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1940] via-[#13275f] to-[#1e3a8a] text-white">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-64 h-64 text-primary-400/10" viewBox="0 0 200 200">
          <title>decorative blob</title>
          <path fill="currentColor" d="M40.2,-61.7C50.8,-53.5,57.1,-38.6,60.1,-23.7C63.1,-8.8,62.9,6,58.2,18.4C53.6,30.9,44.5,40.9,33.7,48.6C22.9,56.3,10.4,61.6,-2.8,65.3C-16,69,-32.1,71.1,-45.6,64.9C-59.1,58.8,-70.1,44.3,-75.3,28.6C-80.6,12.8,-80.1,-4.2,-74.3,-18.3C-68.5,-32.4,-57.3,-43.6,-44.8,-51.3C-32.2,-59,-18.3,-63.2,-2.9,-59.3C12.4,-55.5,29.6,-69.9,40.2,-61.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-28 lg:pt-24 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              WELCOME TO CORECRAFT TECHNOLOGIES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                  Digital
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <title>underline decorative</title>
                  <path d="M2 6 Q 50 0 100 4 T 198 3" stroke="#60a5fa" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <br /> Growth Partner
            </h1>

            <p className="mt-6 text-base md:text-lg text-blue-100/90 max-w-xl leading-relaxed">
              We design, develop, and deploy cutting-edge digital solutions that empower businesses
              to innovate, automate, and compete globally.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-900 font-semibold px-6 py-3.5 rounded-md hover:bg-blue-50 shadow-xl shadow-black/20 transition-all"
              >
                Contact Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>arrow right</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <button type="button" className="inline-flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition-colors">
                <span className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/5 backdrop-blur">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><title>play</title><path d="M8 5v14l11-7z" /></svg>
                </span>
                Watch Introduction
              </button>
            </div>

            <div className="mt-12 hidden md:flex items-center gap-6 text-xs text-blue-100/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {([0, 1, 2, 3] as number[]).map((i) => {
                    const bg = `hsl(${210 + i * 15}, 80%, 60%)`
                    return (
                      <div
                        key={bg}
                        className="w-7 h-7 rounded-full bg-primary-400 border-2 border-[#0a1940]"
                        style={{ background: bg }}
                      />
                    )
                  })}
                </div>
                <span>Trusted by 2,500+ clients</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-1">
                <div className="flex">
                    {['star-0', 'star-1', 'star-2', 'star-3', 'star-4'].map((s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><title>star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" /></svg>
                    ))}
                  </div>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            {/* Stats badge top */}
            <div className="absolute -top-4 -left-4 z-10 flex items-center gap-3 bg-white rounded-2xl shadow-2xl shadow-black/30 px-5 py-3 text-gray-900">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">99.6%</div>
                <div className="text-[11px] text-gray-500">Client Satisfaction</div>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10">
              <div className="aspect-[4/5] lg:aspect-[5/6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMG}
                  alt="CoreCraft team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1940]/40 via-transparent to-transparent" />
            </div>

            {/* Bottom line decoration */}
            <div className="absolute -bottom-8 -left-8 w-3/4 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 rounded-full" />
            <div className="absolute -bottom-10 -left-4 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />

            <div className="hidden lg:flex absolute top-28 right-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-blue-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
          <title>wave decorative</title>
          <path d="M0,48 C240,88 480,8 720,32 C960,56 1200,88 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
