import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'bio', label: 'Bio' },
  { id: 'discography', label: 'Discography' },
  { id: 'performances', label: 'Performances' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on hash change or resize to desktop
  useEffect(() => {
    const onHash = () => setOpen(false)
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 min-w-0">
            <span className="font-semibold tracking-wide text-base sm:text-lg whitespace-nowrap">EUGENE LEE</span>
            <img
              src="/FluteClearImageArtistWebsite.PNG"
              alt="Logo"
              className="h-8 w-auto shrink-0"
            />
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:items-center md:gap-2 lg:gap-4 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="px-3 py-2 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-black/10 hover:bg-black/5 active:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}
        aria-hidden={!open}
      >
        <div className="px-4 sm:px-6 pb-4">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block w-full text-center px-3 py-2 rounded-xl bg-white/80 border border-black/5 hover:bg-black/10 active:bg-black/15 touch-manipulation"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
