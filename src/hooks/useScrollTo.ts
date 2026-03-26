import { useCallback } from 'react'

export const useScrollTo = () => {
  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const navHeight = 72
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return scrollTo
}
