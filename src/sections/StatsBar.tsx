import { STATS } from '../data/data'
import { useInView } from '../hooks/useInView'

const StatsBar = () => {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center gap-12 px-[5vw] py-10 border-t border-b border-border relative z-10"
    >
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className="text-center transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${i * 100}ms`,
          }}
        >
          <div className="font-mono text-4xl font-extrabold text-accent leading-none">
            {stat.num}
          </div>
          <div className="font-mono text-[0.65rem] text-muted tracking-[0.12em] uppercase mt-1.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsBar
