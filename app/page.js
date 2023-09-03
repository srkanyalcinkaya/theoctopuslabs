
import About from '@/components/About'
import BackToTopButton from '@/components/BackToTopButton'
import Clients from '@/components/Clients'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Technologies from '@/components/Technologies'

export default function Home() {
  
  return (
    <main className='grow'>
      <Hero />
      <About />
      <Clients />
      <Technologies />
      <Team />
      <BackToTopButton/>
    </main>

  )
}
