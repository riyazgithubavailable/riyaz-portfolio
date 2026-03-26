import { CONTACT_ITEMS } from '../data/data'
import { useInView } from '../hooks/useInView'
import SectionTag from '../components/SectionTag'

const Contact = () => {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="px-[5vw] py-24 relative z-10">
      <SectionTag label="Get In Touch" />
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-none mb-12">
        Con<span className="text-accent">tact</span>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {CONTACT_ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="bg-surface border border-border p-6 flex items-center gap-4
              hover:border-accent hover:translate-x-1 transition-all duration-300 no-underline"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-16px)',
              transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms, border-color 0.3s`,
            }}
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="font-mono text-[0.62rem] text-muted tracking-widest uppercase mb-1">
                {item.label}
              </div>
              <div className="text-sm font-semibold text-text">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
