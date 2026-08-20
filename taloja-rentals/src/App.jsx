import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Listings from './components/Listings'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [selectedListing, setSelectedListing] = useState(null)

  const handleInquire = (listing) => {
    setSelectedListing(listing)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSearch = () => {
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Listings onInquire={handleInquire} />
        <About />
        <Services />
        <Contact selectedListing={selectedListing} />
      </main>
      <Footer />
    </div>
  )
}

export default App
