import { SKILLS } from '../data/data'
import { useInView } from '../hooks/useInView'
import SectionTag from '../components/SectionTag'

const SkillCard = ({
  skill,
  index,
  inView,
}: {
  skill: (typeof SKILLS)[0]
  index: number
  inView: boolean
}) => (
  <div
    className="p-6 bg-surface border border-transparent hover:border-accent hover:bg-surface2 hover:-translate-y-1 transition-all duration-300 cursor-default"
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border-color 0.3s, background 0.3s`,
    }}
  >
    <div className="text-2xl mb-2">{skill.icon}</div>
    <div className="font-mono text-sm font-semibold text-text mb-1">{skill.name}</div>
    <div className="font-mono text-[0.67rem] text-muted mb-3">{skill.desc}</div>
    <div className="h-0.5 bg-border">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent2 transition-all duration-1000"
        style={{ width: inView ? `${skill.level}%` : '0%', transitionDelay: `${index * 80 + 300}ms` }}
      />
    </div>
  </div>
)

const Skills = () => {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="px-[5vw] py-24 relative z-10">
      <SectionTag label="Technical Arsenal" />
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-none mb-12">
        Skills &amp; <span className="text-accent">Stack</span>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px border border-border bg-border"
      >
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}

export default Skills
