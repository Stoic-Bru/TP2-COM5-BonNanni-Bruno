import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
    const redes = [
        { id: 1, nombre: "Instagram", link: "https://www.instagram.com/bru_btw/?hl=es-la" },
        { id: 2, nombre: "GitHub", link: "https://github.com/Stoic-Bru" },
        { id: 3, nombre: "WhatsApp", link: "https://wa.me/5493816078452" }
    ];

    return (
        <div className="contact-container">
            <Header titulo="Contacto" subtitulo="¡Ponete en contacto conmigo a través de mis redes!" />
            <SocialLinks redes={redes} />
        </div>
    );
}