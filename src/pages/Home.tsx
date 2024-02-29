import "../index.css"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

function Home() {

  return (
    <section className="home">
      <Header/>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}   

export default Home
