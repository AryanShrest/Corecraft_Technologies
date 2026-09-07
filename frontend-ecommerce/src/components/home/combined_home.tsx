import React, { useEffect, useRef, useState, useCallback } from 'react';

// Minimal `cn` helper
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

// Minimal hooks inlined from the original project
function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible] as const;
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      else setCount(target);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, start]);

  return count;
}

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const el = ref.current;
          if (!el) { tickingRef.current = false; return; }
          const rect = el.getBoundingClientRect();
          const windowH = window.innerHeight;
          const center = rect.top + rect.height / 2;
          const distFromCenter = center - windowH / 2;
          setOffset(distFromCenter * speed * -1);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return [ref, offset] as const;
}

// Tiny Icon mapper to avoid external icon libs.
function Icon({ name, className }: { name: string; className?: string }) {
  const style = { width: '1em', height: '1em', display: 'inline-block' } as const;
  switch (name) {
    case 'arrow-right': return <span className={className} style={style}>→</span>;
    case 'play': return <span className={className} style={style}>▶</span>;
    case 'arrow-up': return <span className={className} style={style}>↑</span>;
    case 'phone': return <span className={className} style={style}>☎</span>;
    case 'mail': return <span className={className} style={style}>✉</span>;
    case 'check': return <span className={className} style={style}>✓</span>;
    case 'star': return <span className={className} style={style}>★</span>;
    default: return <span className={className} style={style}>•</span>;
  }
}

// Inlined site data (icons as names)
const siteData = {
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { icon: 'code', title: 'Custom Software', description: 'Tailored web applications.', features: ['React', 'API', 'Cloud'] },
    { icon: 'mobile', title: 'Mobile Apps', description: 'iOS and Android apps.', features: ['React Native', 'Stores'] },
    { icon: 'design', title: 'UI/UX Design', description: 'User-centered interfaces.', features: ['Design systems'] },
  ],
  stats: [
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 45, suffix: '+', label: 'Happy Clients' },
    { value: 6, suffix: '', label: 'Years in Business' },
    { value: 15, suffix: '', label: 'Team Members' },
  ],
  testimonials: [
    { name: 'Rajesh Maharjan', role: 'Founder', company: 'Himalayan Logistics', quote: 'Great work.', initials: 'RM' },
    { name: 'Sneha Shrestha', role: 'CEO', company: 'Kathmandu Eats', quote: 'Amazing delivery.', initials: 'SS' },
  ],
  faqs: [
    { question: 'What types of projects?', answer: 'Web, mobile, e-commerce.' },
    { question: 'How long?', answer: '6-16 weeks typical.' },
  ],
  clientLogos: [
    { name: 'Himalayan Logistics' }, { name: 'Kathmandu Eats' }, { name: 'Craft Nepal' },
  ],
  projects: [
    { title: 'Example Project', category: 'Web App', image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg', description: 'A sample project.', tags: ['React', 'API'] },
  ],
  processSteps: [
    { number: '01', title: 'Discover', description: 'Understand the problem.', icon: 'compass', duration: 'Week 1-2' },
    { number: '02', title: 'Plan', description: 'Design and timeline.', icon: 'plan', duration: 'Week 2-3' },
    { number: '03', title: 'Develop', description: 'Build in sprints.', icon: 'dev', duration: 'Week 3-12' },
    { number: '04', title: 'Deliver', description: 'Launch & support.', icon: 'rocket', duration: 'Launch' },
  ],
};

// Components (simplified; keep Tailwind classes so they match the original styling if pasted into a Tailwind project)
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
          let current = 'home';
          for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 120) current = id;
          }
          setActiveSection(current);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={cn('sticky top-0 z-50 transition-all duration-500', scrolled ? 'shadow-md bg-white' : 'bg-white/80')}>
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <a href="#home" onClick={(e)=>{e.preventDefault(); handleNavClick('#home')}} className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold">C</div>
          <div className="flex flex-col leading-none">
            <span className="font-bold">CoreCraft</span>
            <span className="text-xs text-ink-soft uppercase">Nepal</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-4">
          {siteData.navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e)=>{e.preventDefault(); handleNavClick(link.href)}} className={cn('px-3 py-2 text-sm', activeSection === link.href.slice(1) ? 'text-primary' : 'text-ink-soft')}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" onClick={(e)=>{e.preventDefault(); handleNavClick('#contact')}} className="hidden md:inline-flex px-4 py-2 bg-primary text-white rounded">Get a Quote</a>
          <button className="md:hidden px-2" onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen ? '✕' : '☰'}</button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-2">
            {siteData.navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e)=>{e.preventDefault(); handleNavClick(link.href)}} className="block px-4 py-2">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [ref, visible] = useScrollReveal();
  const [collageRef, collageOffset] = useParallax(0.05);
  const [imgIndex, setImgIndex] = useState(0);
  const heroImages = [
    'https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg',
    'https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg',
    'https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg',
  ];

  useEffect(()=>{ const t=setInterval(()=>setImgIndex(i=> (i+1)%heroImages.length),4000); return ()=>clearInterval(t); },[]);

  const scrollTo = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-16 pb-24">
      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white"> <span className="h-2 w-2 bg-primary rounded-full inline-block"/> Nepal's Digital Growth Partner</div>
            <h1 className="mt-6 font-bold text-4xl">We build software that <span className="text-primary">moves your business</span> forward.</h1>
            <p className="mt-6 text-lg text-ink-soft">CoreCraft designs and builds custom web apps, mobile apps, and e-commerce platforms that help businesses scale.</p>
            <div className="mt-8 flex gap-4">
              <a onClick={(e)=>{e.preventDefault(); scrollTo('contact')}} href="#contact" className="px-6 py-3 bg-primary text-white rounded">Get a Free Consultation <Icon name="arrow-right"/></a>
              <a onClick={(e)=>{e.preventDefault(); scrollTo('portfolio')}} href="#portfolio" className="px-6 py-3 bg-white border rounded"> <Icon name="play"/> View Our Work</a>
            </div>
          </div>

          <div className="relative hidden lg:block h-[420px]" style={{animation: visible ? 'scale-in 0.9s both' : undefined}}>
            <div ref={collageRef as any} className="absolute top-0 right-0 w-[62%] h-[65%] rounded overflow-hidden shadow" style={{transform:`translateY(${collageOffset}px)`}}>
              {heroImages.map((src,i)=> (
                <img key={i} src={src} alt="hero" className="absolute inset-0 w-full h-full object-cover transition-all" style={{opacity: i===imgIndex?1:0, transform: i===imgIndex?'scale(1)':'scale(1.08)'}}/>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-[52%] h-[48%] rounded overflow-hidden border-4 border-white">
              <img src="https://images.pexels.com/photos/5961077/pexels-photo-5961077.jpeg" alt="team" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 bg-cloud rounded overflow-hidden p-1">
          {siteData.stats.map((s,i)=> (
            <div key={s.label} className="bg-white p-4 text-center">
              <div className="font-bold text-2xl">{useCountUp(s.value,2000,visible)}{s.suffix}</div>
              <div className="text-sm text-ink-soft mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogos(){
  const [ref, visible] = useScrollReveal();
  const doubled = [...siteData.clientLogos, ...siteData.clientLogos];
  return (
    <section className="py-12 bg-white border-y">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm mb-6">Trusted by ambitious businesses across Nepal</p>
        <div className="flex gap-12 overflow-hidden">
          {doubled.map((l,i)=> <div key={i} className="flex-shrink-0 px-6 h-12 flex items-center justify-center opacity-60">{l.name}</div>)}
        </div>
      </div>
    </section>
  );
}

function Services(){
  const [ref, visible] = useScrollReveal();
  const scrollTo = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return (
    <section id="services" className="py-24 bg-white">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-bold text-2xl">Everything you need to build, launch, and scale</h2>
          <p className="text-ink-soft">From concept to deployment, we cover the full spectrum of product development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((s,i)=> (
            <div key={s.title} className="bg-white p-6 rounded border">
              <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center mb-4">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-ink-soft">{s.description}</p>
              <a onClick={(e)=>{e.preventDefault(); scrollTo('contact')}} href="#contact" className="text-primary mt-4 inline-block">Learn more <Icon name="arrow-right"/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process(){
  const [ref, visible] = useScrollReveal();
  const scrollTo = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return (
    <section className="py-24 bg-cream">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-bold text-2xl">A proven process, built for results</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {siteData.processSteps.map((p,i)=> (
            <div key={p.number} className="bg-white p-6 rounded border">
              <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center">{p.number}</div>
              <div className="mt-3 font-semibold">{p.title}</div>
              <p className="text-sm text-ink-soft">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8"><a onClick={(e)=>{e.preventDefault(); scrollTo('contact')}} href="#contact" className="px-6 py-3 bg-white border rounded">Start your project today</a></div>
      </div>
    </section>
  );
}

function WhyCoreCraft(){
  const [ref, visible] = useScrollReveal();
  const [imgRef, imgOffset] = useParallax(0.08);
  const retention = useCountUp(98,2000,visible);
  const reasons = [
    'Senior engineers, not juniors', 'Fixed-price quotes', 'Weekly demos',
  ];
  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div ref={imgRef as any} className="rounded overflow-hidden shadow"><img src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg" alt="team" className="w-full h-[360px] object-cover" style={{transform:`translateY(${imgOffset}px)`}}/></div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">An agency that actually delivers</h2>
          <p className="mt-4 text-ink-soft">We treat your project like our own.</p>
          <ul className="mt-6 space-y-3">{reasons.map(r=> <li key={r} className="flex items-start gap-3"><span className="text-success">✓</span>{r}</li>)}</ul>
          <div className="mt-6 bg-cream p-4 rounded inline-block"><div className="font-bold text-2xl">{retention}%</div><div className="text-sm text-ink-soft">client retention rate</div></div>
        </div>
      </div>
    </section>
  );
}

function Portfolio(){
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState('All');
  const filtered = active==='All' ? siteData.projects : siteData.projects.filter(p=>p.category===active);
  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-8"><h2 className="font-bold text-2xl">Work we're proud of</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p,i)=> (
            <div key={p.title} className="bg-white rounded overflow-hidden border">
              <div className="h-56 overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover"/></div>
              <div className="p-4"><h3 className="font-semibold">{p.title}</h3><p className="text-sm text-ink-soft">{p.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  const [ref, visible] = useScrollReveal();
  const [current,setCurrent] = useState(0);
  useEffect(()=>{ const t=setInterval(()=>setCurrent(c=> (c+1)%siteData.testimonials.length),6000); return ()=>clearInterval(t); },[]);
  return (
    <section className="py-24 bg-white">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-8"><h2 className="font-bold text-2xl">Don't take our word for it</h2></div>
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded">
          <div className="flex transition-transform duration-700" style={{transform:`translateX(-${current*100}%)`}}>
            {siteData.testimonials.map(t=> (
              <div key={t.name} className="flex-shrink-0 w-full px-2"><div className="bg-cream p-8 rounded">"{t.quote}"<div className="mt-4 font-semibold">{t.name}</div><div className="text-sm text-ink-soft">{t.role}, {t.company}</div></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [ref, visible] = useScrollReveal();
  const [openIndex,setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-cream">
      <div ref={ref as any} className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-8"><h2 className="font-bold text-2xl">Questions, answered</h2></div>
        <div className="space-y-3">
          {siteData.faqs.map((f,i)=>{
            const isOpen = openIndex===i;
            return (<div key={i} className={cn('bg-white rounded p-4 border', isOpen? 'border-primary':'border-cloud')}>
              <button className="w-full text-left flex justify-between" onClick={()=>setOpenIndex(isOpen?null:i)}>
                <span className="font-semibold">{f.question}</span>
                <span>{isOpen?'-':'+'}</span>
              </button>
              {isOpen && <div className="mt-2 text-ink-soft">{f.answer}</div>}
            </div>);
          })}
        </div>
      </div>
    </section>
  );
}

function CTABanner(){
  const [ref, visible] = useScrollReveal();
  return (
    <section className="py-16 bg-white">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="rounded p-10 text-center bg-gradient-to-br from-primary to-primary-700 text-white">
          <h2 className="font-bold text-2xl">Let's build something great together</h2>
          <p className="mt-3">Book a free 30-minute consultation.</p>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="mt-6 inline-block px-6 py-3 bg-white text-primary rounded">Get a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}

function Contact(){
  const [ref, visible] = useScrollReveal();
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [errorMessage,setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setStatus('submitting');
    // No backend — simulate success
    await new Promise(r=>setTimeout(r,700));
    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div ref={ref as any} className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8"><h2 className="font-bold text-2xl">Let's start a conversation</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white p-6 rounded border">
            {status==='success' ? <div className="p-8 text-center">Message sent! 🎉</div> : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Name" required className="p-3 border rounded"/>
                  <input name="email" type="email" placeholder="Email" required className="p-3 border rounded"/>
                </div>
                <textarea name="message" rows={5} placeholder="Project details" required className="w-full p-3 border rounded" />
                {status==='error' && <div className="text-error">{errorMessage}</div>}
                <button type="submit" className="px-6 py-3 bg-primary text-white rounded">Send Message</button>
              </form>
            )}
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded border">Email: hello@corecraftnepal.com</div>
            <div className="bg-white p-4 rounded border">Phone: +977-1-400-1234</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="h-9 w-9 rounded bg-primary flex items-center justify-center font-bold">C</div>
            <p className="mt-3 text-sm text-white/60">Nepal's digital growth partner.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#about" onClick={(e)=>{e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}}>About</a></li>
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}}>Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-3 text-sm text-white/60">hello@corecraftnepal.com</div>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} CoreCraft Nepal. All rights reserved.</div>
      </div>
    </footer>
  );
}

function ScrollToTop(){
  const [visible,setVisible] = useState(false);
  useEffect(()=>{ const onScroll=()=>setVisible(window.scrollY>600); window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return ()=>window.removeEventListener('scroll',onScroll); },[]);
  if(!visible) return null;
  return (<button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full">↑</button>);
}

export default function CombinedHomepage(){
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Process />
        <WhyCoreCraft />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
