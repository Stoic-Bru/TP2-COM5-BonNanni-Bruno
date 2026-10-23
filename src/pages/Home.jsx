import Header from '../components/Header';
import fotoPerfil from '../assets/foto-perfil.jpeg';

export default function Home() {
    return (
        <div className="body">
            <Header titulo="Bienvenido a mi Portfolio" subtitulo="Espacio profesional multipágina desarrollado en React" />
            <div className="contenedor-titulo">
                <img className="foto" src={fotoPerfil} alt="Perfil Bruno" />
                <h2 className="titulo">Bruno Bon Nanni</h2>
                <h3 className="subtitulo">Desarrollador de Software</h3>
            </div>
        </div>
    );
}