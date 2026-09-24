import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'

const Home = () => {

    const lenguajes = ["JavaScript", "HTML", "CSS", "MySQL"]

    const redes = [
        { id: 1, nombre: "Instagram", link: "https://www.instagram.com/bru_btw/?hl=es-la" },
        { id: 2, nombre: "GitHub", link: "https://github.com/Stoic-Bru" },
        { id: 3, nombre: "WhatsApp", link: "https://wa.me/5493816078452" }
    ]

    return (
        <div className="body">
            <Header />
            <MainHome lenguajes={lenguajes} />
            <Footer redes={redes} />
        </div>
    )
}

export default Home