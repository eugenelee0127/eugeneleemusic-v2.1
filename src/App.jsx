import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AlbumCard from './components/AlbumCard'
import PerformanceCard from './components/PerformanceCard'
import { FaInstagram, FaYoutube, FaSpotify, FaApple, FaLinkedin, FaAmazon } from 'react-icons/fa'

// Utility: Responsive iframe wrapper
function ResponsiveVideo({ src, title }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

// Improved Carousel: respects reduced motion, adds alt + sizes
function Carousel({ images, interval = 15000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches || !images?.length) return

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval])

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Eugene Lee carousel image ${index + 1}`}
          loading="eager"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}

function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 bg-bone ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {title && <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

function FillerBlock({ className = '' }) {
  return <div className={`bg-neutral-100 text-neutral-300 text-xs p-4 leading-4 ${className}`}>{'filler '.repeat(80)}</div>
}

function Resume() {
  return (
    <div className="space-y-12">
      {/* Albums Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold border-b pb-2 mb-4">Albums</h3>
        <div className="mb-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="font-medium">Going Solo: 20th Century Virtuosities for Solo Flute</span>
            <span className="text-neutral-500">October 14, 2024</span>
          </div>
          <div className="text-sm text-neutral-600 mt-1">Available on All Platforms</div>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold border-b pb-2 mb-4">Awards</h3>
        <div className="space-y-4">
          {[
            {
              title: "Massachusetts Governor’s Citation in Recognition",
              date: 'November 25, 2024',
              sub: 'Awarded by Maura T. Healey, Governor of Massachusetts',
            },
            {
              title: "Finalist for From the Top's Learning and Media Lab Fellowship",
              date: 'December 4, 2024',
              sub: 'Awarded by the National Public Radio',
            },
            {
              title: '2025 National YoungArts Award Winner (Classical Music/Flute)',
              date: 'November 26, 2024',
              sub: 'Awarded by YoungArts - The National Foundation for the Advancement of Artists',
            },
            {
              title: '2024 National YoungArts Award Winner (Classical Music/Flute)',
              date: 'November 30, 2023',
              sub: 'Awarded by YoungArts - The National Foundation for the Advancement of Artists',
            },
            {
              title: "1st Place in Woodwinds & Brass - UMASS Amherst Young Artist Awards 2023",
              date: 'June 10, 2023',
              sub: 'Awarded by UMASS Amherst College of Humanities & Fine Arts Department of Music and Dance',
            },
            {
              title: '2nd Place - 21st National Student Music Scholarship Competition of Seoul',
              date: 'March 3, 2021',
              sub: 'Awarded by the Venusto Musicians Association',
            },
            {
              title: '1st Place - 20th National Student Music Scholarship Competition of Seoul',
              date: 'September 13, 2020',
              sub: 'Awarded by the Venusto Musicians Association',
            },
            {
              title: '1st Place - 39th Haneum Music Competition',
              date: 'December 28, 2019',
              sub: 'Awarded by Haneum Music Competition',
            },
            {
              title: '1st place in Flute & Overall 2nd place in Winds - 19th Music Education News Competition',
              date: 'October 28, 2019',
              sub: 'Awarded by the president of the Music Education News',
            },
            {
              title: '3rd place - 23rd National Wind Instrument Competition',
              date: 'August 17, 2019',
              sub: 'Awarded by the Wind Music Alumni Association at Seoul National University College of Music',
            },
            {
              title: '1st Place - 2019 Semester 1 Hanye Music Competition',
              date: 'June 8, 2019',
              sub: 'Awarded by the president of the Korea Arts Evaluation Committee',
            },
          ].map((a, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium">{a.title}</span>
                <span className="text-neutral-500">{a.date}</span>
              </div>
              <div className="text-sm text-neutral-600">{a.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Performing Experiences Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold border-b pb-2 mb-4">Performing Experiences</h3>
        <div className="space-y-4">
          {[
            { t: 'Boston Ballet Next Generation Orchestra', d: 'February - May 2025', sub: 'Flute/Piccolo' },
            { t: 'Boston City Showcase Sponsored Solo Recital', d: 'September 25, 2024' },
            { t: 'Continuo Music Goddard House Recital for Senior Citizens', d: 'November 10, 2024' },
            { t: '2024 Greece Tour: Youth Symphony Orchestra New England Conservatory Preparatory School', d: 'June 2024', sub: 'Principal Flute/Piccolo' },
            { t: 'Youth Philharmonic Orchestra - New England Conservatory Preparatory School', d: 'September 2024 - May 2025', sub: 'Principal Flute/Piccolo' },
            { t: 'Youth Symphony - New England Conservatory Preparatory School', d: 'September 2023 - June 2024', sub: 'Principal Flute/Piccolo' },
            { t: 'Honors Woodwind Quintet - New England Conservatory Preparatory School', d: 'September 2023 - May 2024', sub: 'Flute' },
            { t: 'Junior Repertory Orchestra - New England Conservatory Preparatory School', d: 'September 2022 - April 2023', sub: 'Principal Flute' },
            { t: '59th Music Education News Competition Winners’ Concert', d: 'January 19, 2020' },
          ].map((p, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium">{p.t}</span>
                <span className="text-neutral-500">{p.d}</span>
              </div>
              {p.sub && <div className="text-sm text-neutral-600">{p.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Musical Education Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold border-b pb-2 mb-4">Musical Education</h3>
        <div className="space-y-2">
          <div>
            <span className="font-medium">New England Conservatory of Music, Preparatory School, Boston, MA</span>
            <span className="text-neutral-500 block">April 2022 - May 2025</span>
          </div>
          <div>
            <span className="font-medium">Yewon School (예원학교), Seoul, South Korea</span>
            <span className="text-neutral-500 block">March 2020 - December 2021</span>
            <div className="text-sm text-neutral-600">Classical Flute Performance Major</div>
          </div>
        </div>
      </section>

      {/* Repertoire Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold border-b pb-2 mb-4">Repertoire</h3>
        <div className="space-y-6">
          {[
            {
              h: 'Concertos',
              items: [
                ['Franz Benda', 'Flute Concerto in E minor'],
                ['Michel Blavet', 'Flute Concerto in A minor'],
                ['François Devienne', 'Flute Concerto No. 4 in G major; Flute Concerto No. 7 in E minor'],
                ['Jacques Ibert', 'Flute Concerto'],
                ['Saverio Mercadante', 'Flute Concerto in E minor'],
                ['Carl Nielsen', 'Flute Concerto, CNW. 42'],
                ['Carl Reinecke', 'Flute Concerto in D major, Op. 283'],
                ['Carl Stamitz', 'Flute Concerto in G major, Op. 29'],
                ['Wolfgang Amadeus Mozart', 'Flute Concerto No. 1 in G major, KV. 313; Flute Concerto No. 2 in D major, KV. 314'],
              ],
            },
            {
              h: 'Flute with Accompaniment',
              items: [
                ['Johann Sebastian Bach', 'Flute Sonata in E♭ major, BWV 1031; Flute Sonata in C major, BWV 1033'],
                ['Carl Philipp Emanuel Bach', 'Hamburger Sonata for Flute and Basso Continuo in G major'],
                ['Eldon Burton', 'Sonatina for Flute and Piano'],
                ['Cécile Chaminade', 'Flute Concertino, Op. 107'],
                ['Albert Franz Doppler', 'Andante and Rondo, Op. 25 for Two Flutes and Piano'],
                ['Gabriel Fauré', 'Fantaisie, Op. 79'],
                ['Philippe Gaubert', 'Fantaisie; Nocturne et Allegro Scherzando'],
                ['Paul Agricol Genin', 'Carnaval de Venice, Op. 14'],
                ['Howard Hanson', 'Serenade for Solo Flute, Harp, and String Orchestra'],
                ['Paul Hindemith', 'Sonata for Flute and Keyboard'],
                ['Wolfgang Amadeus Mozart', 'Flute Sonata No. 4 in F major, KV. 13'],
                ['Robert Muczynski', 'Sonata for Flute and Piano'],
                ['Otar Taktakishvili', 'Sonata in G major for Flute and Piano'],
                ['Georg Philipp Telemann', 'Sonata in F minor for Flute and Piano'],
                ['Paul Taffanel', 'Andante Pastoral and Scherzettino'],
              ],
            },
            {
              h: 'Solo Flute Without Accompaniment',
              items: [
                ['Johann Sebastian Bach', 'Partita in A minor, BWV 1013'],
                ['Ian Clarke', 'The Great Train Race'],
                ['Valerie Coleman', 'Danza de la Mariposa'],
                ['Claude Debussy', 'Syrinx'],
                ['Gabriel Fauré', 'Morceau de Concours'],
                ['Paul Hindemith', 'Acht Stücke für Flöte Allein'],
                ['Sigfrid Karg-Elert', 'Sonata Appassionata, Op. 140'],
                ['Robert Muczynski', 'Three Preludes for Solo Flute'],
                ['Georg Philipp Telemann', 'Twelve Fantasias for Flute Without Bass'],
              ],
            },
            {
              h: 'Chamber Ensembles',
              items: [
                ['Jenni Brandon', 'Five Frogs for Woodwind Quintet'],
                ['Modest Mussorgsky', 'Pictures at an Exhibition (Arr. Joachim Linckelmann for Woodwind Quintet)'],
                ['Anton Reicha', 'Quintette for Flute, Oboe, Clarinet, Horn, and Bassoon in E minor'],
              ],
            },
            {
              h: 'Flute Parts of Orchestral Pieces',
              items: [
                ['Adolphe Adam', 'Excerpts from Giselle'],
                ['Ludwig van Beethoven', 'The Creatures of Prometheus Overture'],
                ['Luigi Cherubini', 'Overture to Eliza'],
                ['Aaron Copland', 'John Henry'],
                ['Claude Debussy', 'La Mer'],
                ['Antonín Dvořák', 'Symphony No. 8'],
                ['George Gershwin', 'An American in Paris'],
                ['Mikhail Glinka', 'Ruslan and Ludmila – Overture'],
                ['Camargo Guarnieri', 'Abertura Concertante'],
                ['James P. Johnson', 'Victory Stride'],
                ['Aleksandr Krein', 'Laurencia'],
                ['Steven Karidoyanes', 'Yerakina'],
                ['Quinn Mason', 'Toast of the Town Overture'],
                ['Wolfgang Amadeus Mozart', 'Symphony No. 31 in D major, “Paris”'],
                ['Sergei Prokofiev', 'Piano Concerto No. 3'],
                ['Giacomo Puccini', 'Nessun Dorma (from Turandot)'],
                ['Sergei Rachmaninoff', 'Piano Concerto No. 2'],
                ['Nikolai Rimsky-Korsakov', 'The Snow Maiden: Dance of the Tumblers'],
                ['Gioachino Rossini', 'La Cenerentola Overture'],
                ['Camille Saint-Saëns', 'Rigaudon'],
                ['Robert Schumann', 'Symphony No. 1'],
                ['Jean Sibelius', 'Violin Concerto in D minor, Op. 47'],
                ['Bedřich Smetana', 'Ma Vlast No. 2: The Moldau'],
                ['William Grant Still', 'Threnody in Memory of Jan Sibelius'],
                ['Johan Svendsen', 'Andante Funèbre'],
              ],
            },
          ].map((group, gi) => (
            <div key={gi}>
              <h4 className="font-semibold">{group.h}</h4>
              <ul className="list-disc list-inside text-sm text-neutral-700 mt-2 space-y-1">
                {group.items.map(([c, w], i) => (
                  <li key={i}>
                    <span className="font-medium">{c}:</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function VideoGallery() {
  return (
    <div className="grid gap-8">
      {[
        { src: 'https://www.youtube.com/embed/YskuS02cvYo?si=mVDKhEAqe75gphLz', title: 'Sigfrid Karg-Elert: Sonata Appassionata, Op. 140' },
        { src: 'https://www.youtube.com/embed/GRLJ8DWT-IU?si=lTS5O491hxz1kk-L', title: 'Carl Nielsen: Flute Concerto, CNW. 42' },
        { src: 'https://www.youtube.com/embed/t-SRyJskQ4o?si=1QSxIei9_5XayZx2', title: 'Paul Hindemith: Sonata for Flute and Keyboard' },
        { src: 'https://www.youtube.com/embed/WVuYRpQ_BDI?si=bvJ9xr4te3lpZNyU', title: 'Ian Clarke: The Great Train Race' },
      ].map((v, i) => (
        <div className="flex justify-center" key={i}>
          <ResponsiveVideo src={v.src} title={v.title} />
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [albums, setAlbums] = useState([])
  const [performances, setPerformances] = useState([])

  useEffect(() => {
    fetch('/api/discography')
      .then(r => r.json())
      .then(d => setAlbums(d.albums || []))
      .catch(() => {})
    fetch('/api/performances')
      .then(r => r.json())
      .then(d => setPerformances(d.performances || []))
      .catch(() => {})
  }, [])

  return (
    <div className="font-sans">
      <Navbar />
      
      {/* HOME / HERO with rotating images */}
      <Section
        id="home"
        /* Mobile: fill viewport minus 4rem navbar, center vertically.
          Desktop: remove the min-height + flex so layout stays exactly as before. */
        className="pt-20 md:pt-0 min-h-[calc(100svh-3rem)] md:min-h-0 flex items-center md:block"
      >
        <div
          className={
            /* Optional: simulate ~90% zoom on desktop without affecting mobile.
              Remove `md:scale-[0.9] lg:scale-100` if you want 100% everywhere. */
            "grid md:grid-cols-2 gap-8 lg:gap-10 items-center w-full transform md:scale-[0.9] lg:scale-100 md:origin-top"
          }
        >
          {/* Left side: text (always visible) */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">Eugene Lee</h1>
            <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
              Music isn’t a hobby.<br />
              Collecting coins is a hobby.<br />
              Being a musician is a way of life.<br />
              It’s who you are, not merely<br />
              something you do.
            </p>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-4">
              <a
                href="https://instagram.com/eugene.__lee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: @eugene.__lee"
                className="text-neutral-700 hover:text-neutral-900 touch-manipulation"
              >
                <FaInstagram className="w-7 h-7 text-pink-500" />
              </a>
              <a
                href="https://www.youtube.com/@CubingFlutist"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube: @CubingFlutist"
                className="text-neutral-700 hover:text-neutral-900 touch-manipulation"
              >
                <FaYoutube className="w-7 h-7 text-red-500" />
              </a>
              <a
                href="https://open.spotify.com/artist/37tG8lF6Kh3cpf6tfvEHsA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify artist page"
                className="text-neutral-700 hover:text-neutral-900 touch-manipulation"
              >
                <FaSpotify className="w-7 h-7 text-green-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/eugene-lee-0965952b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-neutral-700 hover:text-neutral-900 touch-manipulation"
              >
                <FaLinkedin className="w-7 h-7 text-blue-500" />
              </a>
            </div>
          </div>

          {/* Right side: carousel — hidden on mobile, unchanged on desktop */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden hidden md:block">
            <Carousel
              images={['/eugenelee1.JPG', '/eugenelee2.JPG', '/eugenelee3.JPG']}
              interval={3000}
            />
          </div>
        </div>
      </Section>

      {/* Mobile-only rotating photo below the hero */}
      <Section id="gallery"> 
        <div className="mt-10 md:hidden w-full">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Carousel
              images={['/eugenelee1.JPG', '/eugenelee2.JPG', '/eugenelee3.JPG']}
              interval={3000}
            />
          </div>
        </div>
      </Section>
      
      {/* BIO */}
      <Section id="bio" title="Bio">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="leading-7 text-neutral-800 text-justify text-sm sm:text-base">
              Eugene Lee is a Boston-based flutist and freshman at Yale University who began his classical flute studies at Korea’s Yewon School (예원학교) before moving to Cambridge in 2022. A recent graduate of Cambridge Rindge and Latin School, Eugene served as principal flutist of the New England Conservatory Preparatory School’s Youth Philharmonic Orchestra under Juliano Aniceto and also played in the Honors Woodwind Quintet with coach Gregory Newton. During his time at NEC Prep, he studied privately with Nina Barwell and credits Steven Karidoyanes (YS), Adam Grossman (JRO), and Peter Jarvis (YSO) for his orchestral studies during his underclassmen years.
            </p>
            <p className="leading-7 text-neutral-800 text-justify text-sm sm:text-base">
              Recent projects include his debut album Going Solo: 20th-Century Virtuosities for Solo Flute and appearances at the First Church of Cambridge as a soloist of the Boston City Showcase. His honors range from a Massachusetts Governor’s Citation in 2024 to being selected as a National YoungArts Winner in both 2024 and 2025, first prize in the 2023 UMass Amherst Young Artist Awards, and a finalist spot in NPR’s From the Top Learning & Media Lab Fellowship.
            </p>
            <p className="leading-7 text-neutral-800 text-justify text-sm sm:text-base">
              Professionally, Eugene has worked at the Center for Astrophysics | Harvard & Smithsonian, as part of its Minor Planet Center's “Planetary Defenders” team, where he spent two semesters and a summer helping refine a mathematical equation to predict asteroid locations and developing a Python program that verified the coordinates of more than 2,500 observatories around the world. Currently, he is independently contracted to Ringle, where he teaches English as a Second Language to students in various professional occupations. He is credited by his high school as the founder of the Rubik's Cube Club, where he led an initiative with his school's chapter of the National Honors Society to start Rubik’s Cube workshops for K–12 students at local youth centers. In the winter of 2025, the club successfully hosted a competition certified by the World Cube Association (WCA), in partnership with Cube New England, gathering over 150 cubers from New England.
            </p>
            <p className="leading-7 text-neutral-800 text-justify text-sm sm:text-base">
              At Yale, Eugene is exploring his interests in Computational Linguistics, Architecture, Economics & Math, and Patent Law while continuing to pursue music at the highest level. He hopes to make a profound impact in whichever career path he decides to pursue.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Highlights</h4>
              <ul className="text-sm mt-2 list-disc pl-5 text-neutral-700 space-y-1">
                <li>Boston-based flutist, Yale '29</li>
                <li>Former principal flutist, NEC Prep Youth Philharmonic Orchestra</li>
                <li>Debut album: Going Solo: 20th-Century Virtuosities for Solo Flute</li>
                <li>National YoungArts Winner (2024 & 2025), MA Governor’s Citation (2024)</li>
                <li>Former Intern and Observatory Coordinate Manager at Center for Astrophysics | Harvard & Smithsonian</li>
                <li>Founder of CRLS Rubik’s Cube Club & WCA-certified competition host</li>
                <li>Exploring Computational Linguistics, Architecture, Economics & Math, and Patent Law at Yale</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Press</h4>
              <p className="text-sm text-neutral-700 mt-2">
                Featured by the National Public Radio<br />"Wartime Flute"&nbsp;
                <a
                  href="https://www.daily-joy.org/video/wartime-flute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 underline"
                >
                  [Click to listen]
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* DISCOGRAPHY */}
      <Section id="discography" title="Discography">
        <div className="space-y-8">
          {/* Static block for the Going Solo album */}
          <div className="flex flex-col items-center mb-6 text-center">
            <img
              src="/Going_Solo_Album_Cover.PNG"
              alt="Going Solo album cover"
              loading="lazy"
              decoding="async"
              className="rounded-2xl shadow-lg w-56 sm:w-64 md:w-72 h-auto"
            />
            <h2 className="mt-4 text-lg sm:text-xl font-semibold">Going Solo: 20th Century Virtuosities for Solo Flute</h2>
            <div className="mt-2 text-sm text-neutral-500">October 14, 2024</div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm font-medium">Available on</span>
              <a href="https://open.spotify.com/album/6RwizD13N0X1XNJVCyE791" target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
                <FaSpotify className="w-6 h-6 text-green-500" />
              </a>
              <a href="https://www.youtube.com/playlist?list=OLAK5uy_lUG6lmj8KOKkDQjsvs8VwLl8vBetI8rT0" target="_blank" rel="noopener noreferrer" aria-label="Listen on YouTube">
                <FaYoutube className="w-6 h-6 text-red-500" />
              </a>
              <a href="https://music.amazon.com/albums/B0DK2H8VXD" target="_blank" rel="noopener noreferrer" aria-label="Listen on Amazon Music">
                <FaAmazon className="w-6 h-6 text-orange-500" />
              </a>
            </div>
          </div>

          {/* Sorted dynamic albums (if more than one album exists) */}
          {albums && albums.length > 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums
                .sort((a, b) => new Date(b.released) - new Date(a.released))
                .map((a, idx) => (
                  <AlbumCard key={idx} album={a} />
                ))}
            </div>
          )}
        </div>
      </Section>

      {/* PERFORMANCES */}
      <Section id="performances" title="Performance Highlights">
        <div className="space-y-12">
          {/* Solo Performances */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Solo</h3>
            <div className="space-y-8">
              {[
                { src: 'https://www.youtube.com/embed/YskuS02cvYo?si=mVDKhEAqe75gphLz', title: 'Sigfrid Karg-Elert: Sonata Appassionata, Op. 140', meta: ['Performed as a guest soloist of the Boston City Showcase', 'September 25, 2024', 'First Church of Cambridge'] },
                { src: 'https://www.youtube.com/embed/GRLJ8DWT-IU?si=lTS5O491hxz1kk-L', title: 'Carl Nielsen: Flute Concerto, CNW. 42' },
                { src: 'https://www.youtube.com/embed/t-SRyJskQ4o?si=1QSxIei9_5XayZx2', title: 'Paul Hindemith: Sonata for Flute and Keyboard' },
                { src: 'https://www.youtube.com/embed/WVuYRpQ_BDI?si=bvJ9xr4te3lpZNyU', title: 'Ian Clarke: The Great Train Race' },
              ].map((v, i) => (
                <div className="flex flex-col md:flex-row items-center gap-4" key={i}>
                  <div className="w-full md:w-1/2">
                    <ResponsiveVideo src={v.src} title={v.title} />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-base sm:text-lg font-medium">{v.title}</p>
                    {v.meta && (
                      <p className="text-sm text-neutral-600">
                        {v.meta[0]}<br />{v.meta[1]}<br />{v.meta[2]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chamber Performances */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Chamber</h3>
            <div className="space-y-8">
              {[
                {
                  src: 'https://www.youtube.com/embed/w1NgcwAcpn4',
                  title: 'Modest Mussorgsky: Pictures at an Exhibition',
                  meta: ['(arr. for Woodwind Quintet by Joachim Linckelmann)', 'Performed by the NEC Prep Honors Woodwind Quintet', 'NEC Prep Chamber Music Showcase', 'May 22, 2024', 'Jordan Hall, Boston'],
                },
                {
                  src: 'https://www.youtube.com/embed/a9sRL40ADUc',
                  title: 'François René Gebauer: QUATUOR CONCERTANT',
                  meta: ['für Flöte, Klarinette (Oboe), Fagott und Horn. Opus 27, 2', 'Performed by the NEC Prep Honors Woodwind Quintet', 'NEC Prep Chamber Music Showcase', 'May 23, 2025', 'Jordan Hall, Boston'],
                },
              ].map((v, i) => (
                <div className="flex flex-col md:flex-row items-center gap-4" key={i}>
                  <div className="w-full md:w-1/2">
                    <ResponsiveVideo src={v.src} title={v.title} />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-base sm:text-lg font-medium">
                      {v.title}
                      {v.meta?.[0] && (
                        <>
                          <br />
                          <span className="text-sm text-neutral-700">{v.meta[0]}</span>
                        </>
                      )}
                    </p>
                    {v.meta && (
                      <p className="text-sm text-neutral-600">
                        {v.meta.slice(1).join('\n')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" title="Resume">
        <Resume />
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-4 rounded-xl bg-white border border-black/5 shadow-soft flex flex-col items-center text-center">
            <h4 className="font-semibold flex flex-wrap items-center justify-center gap-2 mb-2">
              The
              <a
                href="https://www.instagram.com/promptdiary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-neutral-900 flex items-center gap-2"
                aria-label="Open @promptdiary on Instagram"
              >
                <span>@promptdiary</span>
                <span>Project</span>
                <FaInstagram className="w-5 h-5" />
              </a>
            </h4>
            <img
              src="/logo_prompt_diary.png"
              alt="PromptDiary logo"
              loading="lazy"
              decoding="async"
              className="h-28 sm:h-40 w-auto mx-auto my-4"
            />
            <p className="text-sm text-neutral-700">30 days of prompt engineering</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-4 text-center text-xs sm:text-sm text-neutral-500">
        © {new Date().getFullYear()} Eugene Lee
        <img src="/FluteClearImageArtistWebsite.PNG" alt="Flute logo" className="h-7 sm:h-8 w-auto inline align-middle ml-2" />
      </footer>
    </div>
  )
}
