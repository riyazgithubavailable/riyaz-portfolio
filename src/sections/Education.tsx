import { useInView } from '../hooks/useInView'
import SectionTag from '../components/SectionTag'

const educationData = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering',
    institution: 'Jagadambha College of Engineering & Technology, Yavatmal',
    period: 'June 2016 – November 2020 · Maharashtra',
    extra: <span className="inline-flex items-center gap-1.5 font-mono text-xs bg-accent/10 border border-accent/30 text-accent px-2.5 py-1 mt-3">⭐ CGPA: 9.24 / 10</span>,
  },
  {
    icon: '📜',
    degree: 'MERN Full Stack Development',
    institution: 'AccioJob Certification',
    period: 'June 2023 – April 2024',
    extra: (
      <p className="font-mono text-xs text-muted mt-2 leading-relaxed">
        Mastered React, Node.js, Express, and MongoDB with comprehensive project-based training.
      </p>
    ),
  },
]

const Education = () => {
  const { ref, inView } = useInView()

  return (
    <section className="px-[5vw] py-24 bg-surface border-t border-b border-border relative z-10">
      <SectionTag label="Academic Background" />
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-none mb-12">
        Educa<span className="text-accent">tion</span>
      </h2>

      <div ref={ref} className="flex flex-col gap-4">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-surface border border-border p-8 flex gap-6 items-start hover:border-accent transition-colors duration-300"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${i * 150}ms, transform 0.5s ease ${i * 150}ms, border-color 0.3s`,
            }}
          >
            <div className="w-12 h-12 bg-accent/10 border border-accent/25 flex items-center justify-center text-xl flex-shrink-0">
              {edu.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
              <p className="font-mono text-sm text-accent mb-1">{edu.institution}</p>
              <p className="font-mono text-xs text-muted">{edu.period}</p>
              {edu.extra}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
