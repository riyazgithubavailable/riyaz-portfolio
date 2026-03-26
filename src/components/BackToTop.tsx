import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent text-bg font-mono text-lg font-bold 
        flex items-center justify-center border border-accent
        transition-all duration-300 hover:bg-transparent hover:text-accent
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
    >
      ↑
    </button>
  )
}


export default BackToTop
