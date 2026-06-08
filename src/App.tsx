import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContentProvider, useContent } from './context/ContentContext'
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
import AdminPanel from './admin/AdminPanel'

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
    s.onerror = () => resolve()
    document.body.appendChild(s)
  })
}

function HomePage() {
  const { loading } = useContent()

  useEffect(() => {
    if (loading) return
    const run = async () => {
      for (const src of SCRIPTS) {
        await loadScript(src)
      }
    }
    run()
  }, [loading])

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontSize: 16, color: '#888' }}>
      Loading…
    </div>
  )

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

function App() {
  return (
    <ContentProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </ContentProvider>
  )
}

export default App
