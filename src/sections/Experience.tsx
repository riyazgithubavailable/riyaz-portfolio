import { useInView } from '../hooks/useInView'
import SectionTag from '../components/SectionTag'

const bullets = [
  'Developed scalable and reusable UI components using React.js and TypeScript',
  'Integrated REST APIs and managed global state using Redux Toolkit',
  'Implemented data visualization dashboards using ApexCharts for real-time monitoring',
  'Collaborated with backend developers to integrate .NET APIs seamlessly',
]

const Experience = () => {
  const { ref, inView } = useInView()

  return (
    <section
      id="experience"
      className="px-[5vw] py-24 bg-surface border-t border-b border-border relative z-10"
    >
      <SectionTag label="Work History" />
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-none mb-12">
        Experi<span className="text-accent">ence</span>
      </h2>

      <div ref={ref} className="border-b border-border pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12">
          {/* Date */}
          <div
            className="font-mono text-xs text-muted tracking-wider pt-1 transition-all duration-500"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
          >
            Oct 2024 — Present
          </div>

          {/* Content */}
          <div
            className="transition-all duration-500 delay-100"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <h3 className="text-xl font-bold mb-1">React Developer</h3>
            <p className="font-mono text-sm text-accent mb-5">
              Appinity Communication Pvt. Ltd.,Nagpur, Maharashtra
            </p>
             <p className="font-mono text-sm text-accent mb-5">
                Payroll:{"{ KS Associates }"}
            </p>
            <ul className="flex flex-col gap-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="font-mono text-xs text-muted leading-relaxed flex gap-3 transition-all duration-500"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-10px)',
                    transitionDelay: `${200 + i * 100}ms`,
                  }}
                >
                  <span className="text-accent flex-shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
