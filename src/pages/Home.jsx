import { Link } from 'react-router-dom';
import Header from '../components/Header';
import fotoPerfil from '../assets/foto-perfil.jpeg';

export default function Home() {
    return (
        <div className="body">
            <Header
                titulo="Bienvenido a mi Portfolio"
                subtitulo="Explora mi espacio profesional de desarrollo web y software"
            />

            <div className="contenedor-titulo" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <img className="foto" src={fotoPerfil} alt="Perfil Bruno" />
                <div>
                    <h2 className="titulo">Bruno Bon Nanni</h2>
                    <p style={{ opacity: 0.9, marginTop: '8px', lineHeight: '1.5' }}>
                        Estudiante de la Tecnicatura en Programación en la UTN-FRT. Apasionado por la tecnología,
                        el desarrollo de software y la creación de soluciones eficientes y escalables.
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '15px' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.5' }}>
                    En este sitio multipágina podrás conocer las tecnologías con las que trabajo, los proyectos
                    que fui desarrollando a lo largo de mi formación y los medios para ponerte en contacto conmigo.
                </p>

                {/* Botones de acceso rápido con Link */}
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <Link to="/projects" className="btn-card" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Ver Proyectos 🚀
                    </Link>
                    <Link to="/contact" className="boton-contacto" style={{ textDecoration: 'none', display: 'inline-block', lineHeight: 'normal' }}>
                        Contáctame 📬
                    </Link>
                </div>
            </div>
        </div>
    );
}