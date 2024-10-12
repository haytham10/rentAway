import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import Benefits from './components/home/Benefits'
import HowItWorks from './components/home/HowItWorks'
import Testimonials from './components/home/Testimonials'
import Cities from './components/home/Cities'
import ContactForm from './components/home/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Cities />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}