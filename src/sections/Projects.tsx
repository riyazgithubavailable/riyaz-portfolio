import { PROJECTS } from '../data/data'
import { useInView } from '../hooks/useInView'
import SectionTag from '../components/SectionTag'

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0]
  index: number
  inView: boolean
}) => (
  <div
    className="relative bg-surface border border-border p-8 overflow-hidden group
      hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms, border-color 0.3s, box-shadow 0.3s`,
    }}
  >
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="font-mono text-[0.65rem] text-muted tracking-[0.15em] mb-4">
      {project.num} · {project.date}
    </div>

    <h3 className="text-xl font-bold mb-3">{project.title}</h3>

    <p className="font-mono text-xs text-muted leading-relaxed mb-6">{project.desc}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-[0.63rem] tracking-wider px-2.5 py-1 border border-border text-muted
            group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4 flex-wrap">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent tracking-widest uppercase inline-flex items-center gap-2
            hover:gap-3 transition-all duration-200"
        >
          Live Site →
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted tracking-widest uppercase inline-flex items-center gap-2
            hover:text-accent hover:gap-3 transition-all duration-200"
        >
          GitHub →
        </a>
      )}
    </div>
  </div>
)

const Projects = () => {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="px-[5vw] py-24 relative z-10">
      <SectionTag label="Featured Work" />
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-none mb-12">
        Pro<span className="text-accent">jects</span>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}

export default Projects
