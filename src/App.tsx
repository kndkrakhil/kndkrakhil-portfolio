import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Github,
  Layers3,
  Linkedin,
  Menu,
  Network,
  Send,
  X,
  Zap,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  ['01', 'Work', '#work'],
  ['02', 'About', '#about'],
  ['03', 'Systems', '#systems'],
  ['04', 'Contact', '#contact'],
];

const projects = [
  {
    index: '01',
    type: 'NLP / RAG',
    title: 'AI-Powered Judicial Services Chatbot',
    copy: 'A conversational system for legal queries, grounded in IPC content and judicial precedents.',
    stack: ['Python', 'LLM APIs', 'RAG', 'NLP'],
    tone: 'coral',
  },
  {
    index: '02',
    type: 'INDUSTRIAL IoT / CLOUD',
    title: 'Cloud Integrated Autonomous Vehicle',
    copy: 'A cloud-connected vehicle concept using sensor data for navigation and obstacle avoidance.',
    stack: ['Python', 'IoT', 'Sensors', 'Cloud'],
    tone: 'cyan',
  },
  {
    index: '03',
    type: 'DIGITAL SYSTEMS / VLSI',
    title: 'Memory Built-In Self Test',
    copy: 'A Verilog memory testing architecture validated through simulation and response analysis.',
    stack: ['Verilog', 'VLSI', 'Fault Detection'],
    tone: 'violet',
  },
];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="min-h-[100dvh] overflow-hidden bg-[#0b0b0d] text-[#f5f5f2]">
      <header className="fixed inset-x-0 top-0 z-40 border-b hairline bg-[#0b0b0d]/90 backdrop-blur-md">
        <div className="section-shell flex h-[72px] items-center justify-between">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center border border-[#f5f5f2]/70 text-[#f5f5f2] mono text-xs transition-colors hover:bg-[#f5f5f2] hover:text-[#0b0b0d]">KA</span>
            <span className="mono text-[11px] uppercase tracking-[.2em] text-[#f5f5f2]">Kandukuri Akhil</span>
          </a>
          <nav
            className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[84px] flex-col gap-5 border hairline bg-[#1a1b1e] p-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
            aria-label="Main navigation"
          >
            {navItems.map(([number, label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="nav-link mono text-[10px] uppercase tracking-[.16em] text-[#a7a7a4]">
                <span className="mr-2 text-[#f5f5f2]">{number}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#d1d1cf]" />
            <span className="mono text-[10px] uppercase tracking-[.12em] text-[#a7a7a4]">Open to meaningful work</span>
          </div>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="text-[#f5f5f2] md:hidden">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section className="relative flex min-h-[780px] items-center border-b hairline pt-[72px]">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute -right-32 top-28 h-[420px] w-[420px] rounded-full bg-[#777777]/15 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#4f5053]/15 blur-3xl" />
        <div className="section-shell relative w-full py-24">
          <div className="eyebrow hero-enter mb-7">Software that senses</div>
          <h1 className="hero-enter max-w-[1160px] text-[clamp(4rem,14vw,13.5rem)] font-black uppercase leading-[.76] tracking-[-.075em]">
            <span className="block text-[#f5f5f2]">Akhil</span>
            <span className="mt-5 block pl-[9%] text-[#d1d1cf] md:mt-9">
              Kandukuri<span className="text-[#f5f5f2]">.</span>
            </span>
          </h1>
          <div className="hero-enter delay-1 mt-[9%] grid max-w-[980px] grid-cols-1 gap-8 border-t border-[#f5f5f2]/30 pt-5 md:grid-cols-[1.2fr_.8fr]">
            <p className="max-w-[620px] text-[clamp(1.15rem,2vw,1.8rem)] font-medium leading-[1.1] tracking-[-.04em]">
              An Electronics and Communication Engineer building at the seam between intelligent software and the physical world.
            </p>
            <div className="flex items-start justify-between gap-8 font-mono text-[10px] uppercase leading-[1.6] tracking-[.12em] text-[#a7a7a4]">
              <span>01<br /><span className="text-[#f5f5f2]">Signal</span></span>
              <span>02<br /><span className="text-[#f5f5f2]">Systems</span></span>
              <span>03<br /><span className="text-[#f5f5f2]">Sense</span></span>
            </div>
          </div>
          <div className="hero-enter delay-2 mt-9 flex flex-wrap items-center gap-5">
            <a href="#work" className="group inline-flex items-center gap-3 bg-[#f5f5f2] px-5 py-3 mono text-[11px] uppercase tracking-[.12em] text-[#0b0b0d] transition-colors hover:bg-[#d1d1cf]">
              Read the work <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href="mailto:kndkrakhil@gmail.com" className="link-arrow inline-flex items-center gap-2 border-b border-[#a7a7a4]/60 pb-1 mono text-[11px] uppercase tracking-[.12em] text-[#d1d1cf]">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-[#f5f5f2]/25 py-9">
        <div className="section-shell">
          <Reveal className="mb-7 flex items-baseline justify-between">
            <p className="eyebrow">01 / Selected work / 03</p>
            <span className="hidden mono text-[9px] uppercase tracking-[.16em] text-[#a7a7a4] sm:block">Software ↔ Hardware</span>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-[#f5f5f2]/25 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <article className="group h-full bg-[#0b0b0d] p-5 transition-colors hover:bg-[#26272a]">
                  <div className="mb-12 flex items-start justify-between mono text-[9px] uppercase tracking-[.16em] text-[#f5f5f2]">
                    <span>{project.index}</span>
                    <span className="transition-transform group-hover:translate-x-1">↗</span>
                  </div>
                  <h2 className="max-w-[260px] text-[clamp(1.6rem,2.8vw,2.45rem)] font-bold leading-[.9] tracking-[-.06em]">{project.title}</h2>
                  <p className="mt-5 font-mono text-[9px] uppercase leading-[1.5] tracking-[.12em] text-[#c4c4c1]">{project.stack.join(' / ')}</p>
                  <p className="mt-6 max-w-[280px] text-[13px] leading-[1.35] text-[#a7a7a4]">{project.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b hairline py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-[.45fr_1fr]">
          <Reveal><p className="eyebrow">02 / Orientation</p></Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-[820px] text-[clamp(2.6rem,5vw,5.2rem)] leading-[.9] tracking-[-.07em]">
              I like the part where a <em className="serif font-normal text-[#d1d1cf]">model</em> meets a machine.
            </h2>
            <p className="mt-8 max-w-[670px] text-lg leading-8 text-[#a7a7a4]">
              My work moves between AI, Industrial IoT, cloud computing, and digital design. I’m interested in systems that listen through sensors, reason with context, and make something useful happen in the world.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="systems" className="border-b hairline py-28">
        <div className="section-shell grid gap-16 lg:grid-cols-[.7fr_1fr]">
          <Reveal>
            <p className="eyebrow">03 / System map</p>
            <h2 className="mt-5 text-4xl leading-[.95] tracking-[-.05em] md:text-6xl">A range held together by <span className="serif italic text-[#d1d1cf]">curiosity.</span></h2>
            <p className="mt-8 max-w-[390px] leading-7 text-[#a7a7a4]">The tools change. The habit stays: understand the signal, make the connection, test the edge.</p>
          </Reveal>
          <Reveal delay={120} className="grid gap-px border border-[#f5f5f2]/20 bg-[#f5f5f2]/20 sm:grid-cols-2">
            {[
              [BrainCircuit, 'Intelligence', 'AI / ML · NLP · RAG · LLM APIs'],
              [Network, 'Connected systems', 'Industrial IoT · sensors · cloud'],
              [Cpu, 'Digital hardware', 'Verilog · VLSI · digital logic'],
              [Layers3, 'Build layer', 'Python · C · Git / GitHub · Figma'],
            ].map(([Icon, title, copy], index) => {
              const IconComponent = Icon as typeof BrainCircuit;
              return (
                <div key={title as string} className="group bg-[#1a1b1e] p-6 transition-colors hover:bg-[#26272a]">
                  <IconComponent size={24} strokeWidth={1.4} className="text-[#f5f5f2] transition-transform group-hover:scale-110" />
                  <h3 className="mt-9 text-xl">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#a7a7a4]">{copy as string}</p>
                  <span className="mt-6 block mono text-[9px] text-[#c4c4c1]">0{index + 1} / active layer</span>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section id="experience" className="border-b hairline py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-[.6fr_1fr]">
          <Reveal><p className="eyebrow">04 / In the field</p></Reveal>
          <Reveal delay={100}>
            <div className="border-l border-[#f5f5f2] pl-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="mono text-[11px] uppercase tracking-[.14em] text-[#f5f5f2]">2026 / internship</p>
                <span className="border border-[#f5f5f2]/25 px-2 py-1 mono text-[9px] uppercase text-[#d1d1cf]">current chapter</span>
              </div>
              <h2 className="mt-5 text-3xl tracking-[-.03em] md:text-4xl">AI Image Annotation Intern</h2>
              <p className="mt-3 text-lg text-[#d1d1cf]">Colosseum CQ Solutions / Student Tribe</p>
              <p className="mt-6 max-w-[670px] leading-7 text-[#a7a7a4]">Working close to the data that intelligent systems learn from through bounding boxes, polygons, semantic segmentation, quality checks, and peer review.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="education" className="border-b hairline py-28">
        <div className="section-shell grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Reveal><p className="eyebrow">05 / Foundation</p><h2 className="mt-5 text-4xl tracking-[-.04em] md:text-6xl">Built from the <span className="serif italic text-[#d1d1cf]">circuit up.</span></h2></Reveal>
          <Reveal delay={100} className="border-t hairline pt-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div><p className="text-xl">B.E. / B.Tech. — Electronics &amp; Communication Engineering</p><p className="mt-2 text-[#d1d1cf]">St. Martin’s Engineering College</p></div>
              <span className="mono text-sm text-[#f5f5f2]">2022—2026</span>
            </div>
            <div className="mt-8 flex items-center gap-4"><span className="mono text-4xl text-[#d1d1cf]">7.59</span><span className="text-sm text-[#a7a7a4]">CGPA<br />through the current course</span></div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#5a5b5e]/15" />
        <div className="section-shell relative">
          <Reveal>
            <p className="eyebrow">06 / Open channel</p>
            <h2 className="mt-6 max-w-[850px] text-5xl leading-[.95] tracking-[-.06em] md:text-8xl">Let’s find the <span className="serif italic text-[#d1d1cf]">signal.</span></h2>
            <p className="mt-8 max-w-[480px] text-lg leading-8 text-[#a7a7a4]">For a role, a collaboration, or a good technical problem — reach out. I’d like to hear what you’re building.</p>
          </Reveal>
          <Reveal delay={120} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="mailto:kndkrakhil@gmail.com" className="group border hairline bg-[#1a1b1e] p-5 transition-colors hover:border-[#f5f5f2]"><Send size={18} className="text-[#f5f5f2]" /><p className="mt-8 mono text-[10px] uppercase tracking-[.1em] text-[#a7a7a4]">Email</p><p className="mt-2 break-all text-sm">kndkrakhil@gmail.com</p></a>
            <a href="tel:+917013089354" className="group border hairline bg-[#1a1b1e] p-5 transition-colors hover:border-[#f5f5f2]"><Zap size={18} className="text-[#d1d1cf]" /><p className="mt-8 mono text-[10px] uppercase tracking-[.1em] text-[#a7a7a4]">Phone</p><p className="mt-2 text-sm">+91 7013089354</p></a>
            <a href="https://www.linkedin.com/in/kandukuri-akhil" target="_blank" rel="noreferrer" className="group border hairline bg-[#1a1b1e] p-5 transition-colors hover:border-[#f5f5f2]"><Linkedin size={18} className="text-[#d1d1cf]" /><p className="mt-8 mono text-[10px] uppercase tracking-[.1em] text-[#a7a7a4]">LinkedIn</p><p className="mt-2 text-sm">/kandukuri-akhil <ExternalArrow /></p></a>
            <a href="https://github.com/kndkrakhil" target="_blank" rel="noreferrer" className="group border hairline bg-[#1a1b1e] p-5 transition-colors hover:border-[#f5f5f2]"><Github size={18} className="text-[#f5f5f2]" /><p className="mt-8 mono text-[10px] uppercase tracking-[.1em] text-[#a7a7a4]">GitHub</p><p className="mt-2 text-sm">/kndkrakhil <ExternalArrow /></p></a>
          </Reveal>
        </div>
      </section>

      <footer className="border-t hairline py-7">
        <div className="section-shell flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="mono text-[10px] uppercase tracking-[.13em] text-[#7a7a78]">Kandukuri Akhil · Hyderabad, India</p>
          <a href="#top" className="link-arrow flex items-center gap-2 mono text-[10px] uppercase tracking-[.13em] text-[#d1d1cf]">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </main>
  );
}

function ExternalArrow() {
  return <ArrowUpRight size={12} className="ml-1 inline" />;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;