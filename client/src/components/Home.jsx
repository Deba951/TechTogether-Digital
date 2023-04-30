import Navbar from './Navbar'
import Hero from './Hero'
import Caat from './Caat'
import Search from './Search'
import About from './About'

export default function Home() {
    return <div className="home">
        <Navbar />
        <Hero />
        <Search />
        <Caat />
        <About />
    </div>
}