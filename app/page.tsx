import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import Benefits from './components/home/Benefits'
import HowItWorks from './components/home/HowItWorks'
import Testimonials from './components/home/Testimonials'
import Faq from './components/home/Faq'
import ContactForm from './components/home/ContactForm'
import Services from './components/home/Services'
import Steps from './components/home/Steps'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Services />
        <Steps />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}