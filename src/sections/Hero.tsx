import { useScrollTo } from '../hooks/useScrollTo'

const CodeCard = () => (
  <div className="relative bg-surface border border-border p-6 font-mono text-xs leading-loose overflow-hidden gradient-top-border scanline-effect">
    {/* Window dots */}
    <div className="flex gap-2 mb-4 pb-3 border-b border-border">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
    </div>

    <div className="text-text/90">
      <span className="text-accent2">const</span>{' '}
      <span className="text-accent">developer</span> = {'{'}<br />
      &nbsp;&nbsp;<span className="text-[#ce9178]">name</span>:{' '}
      <span className="text-[#e3b341]">"Riyaz Sheikh"</span>,<br />
      &nbsp;&nbsp;<span className="text-[#ce9178]">role</span>:{' '}
      <span className="text-[#e3b341]">"React Developer"</span>,<br />
      &nbsp;&nbsp;<span className="text-[#ce9178]">exp</span>:{' '}
      <span className="text-[#e3b341]">"1.6 years"</span>,<br />
      &nbsp;&nbsp;<span className="text-[#ce9178]">stack</span>: [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"HTML5,CSS"</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"JavaScript"</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"React"</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"TypeScript"</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"Redux Toolkit"</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e3b341]">"Tailwind CSS"</span><br />
      &nbsp;&nbsp;],<br />
      {/* &nbsp;&nbsp;<span className="text-[#ce9178]">cgpa</span>:{' '}
      <span className="text-accent">9.24</span>,<br /> */}
      &nbsp;&nbsp;<span className="text-[#ce9178]">available</span>:{' '}
      <span className="text-accent2">true</span><br />
      {'}'};
    </div>
  </div>
)

const Hero = () => {
  const scrollTo = useScrollTo()

  return (
    <section className="relative min-h-screen flex items-center px-[5vw] pt-36 pb-20 z-10 grid-bg">
      <div className="w-full flex flex-wrap gap-16 items-center">
        {/* Left */}
        <div className="flex-1 min-w-[280px]">
          {/* Tag */}
          <div
            className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-7
              opacity-0 animate-fade-up animate-delay-100"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="w-7 h-px bg-accent" />
            <span
              className="w-2 h-2 rounded-full bg-accent animate-glow"
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight mb-6
              opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: 'forwards' }}
          >
            Riyaz
            <span className="block text-outline">Sheikh</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Sub */}
          <p
            className="font-mono text-sm text-muted leading-[1.9] max-w-md mb-10
              opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            React Developer crafting scalable UI systems &amp;
            <br />
            data-driven dashboards with TypeScript + Redux.
            <br />
            <span className="text-accent animate-blink">_</span>
          </p>

          {/* CTA */}
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="font-mono text-xs tracking-widest uppercase px-7 py-3.5 border border-accent
                bg-accent text-bg transition-all duration-250 hover:bg-transparent hover:text-accent"
            >
              ▸ View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="font-mono text-xs tracking-widest uppercase px-7 py-3.5 border border-border
                text-muted transition-all duration-250 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Code Card */}
        <div
          className="w-full md:w-[300px] opacity-0 animate-fade-up animate-delay-700"
          style={{ animationFillMode: 'forwards' }}
        >
          <CodeCard />
        </div>
      </div>
    </section>
  )
}

export default Hero
