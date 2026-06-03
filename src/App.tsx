import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Trusted from './components/Trusted'
import Growth from './components/Growth'
import Plan from './components/Plan'
import Number from './components/Number'
import Feedback from './components/Feedback'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

const SCRIPTS = [
  '/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/js/webflow.schunk.a19155519ffe4722.js',
  '/js/webflow.schunk.3568ba51b590a2e4.js',
  '/js/webflow.schunk.d659be6dcd9af708.js',
  '/js/webflow.schunk.4913f0d9ee368d76.js',
  '/js/gsap.min.js',
  '/js/SplitText.min.js',
  '/js/ScrollTrigger.min.js',
  '/js/webflow.b253c527.875e28d279993933.js',
]

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => resolve() // don't block chain on error
    document.body.appendChild(s)
  })
}

function App() {
  useEffect(() => {
    // Load Webflow + GSAP scripts sequentially AFTER React has rendered.
    // This guarantees they always find a fully populated DOM, whether the
    // page is loaded fresh or from cache.
    const run = async () => {
      for (const src of SCRIPTS) {
        await loadScript(src)
      }
      // readyState is already 'complete' at this point so Webflow's internal
      // check fires e() immediately — no manual init needed.
    }
    run()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Trusted />
      <Growth />
      <Plan />
      <Number />
      <Feedback />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}

export default App
