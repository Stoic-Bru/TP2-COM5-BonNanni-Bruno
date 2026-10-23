import { useState } from 'react';

const SocialLinks = ({ redes }) => {
    const [mostrarRedes, setMostrarRedes] = useState(false);

    return (
        <footer className="footer">
            <h3 className="titulo-redes">Mis Redes</h3>
            <button className="boton-contacto" onClick={() => setMostrarRedes(!mostrarRedes)}>
                {mostrarRedes ? 'Ocultar redes' : 'Ver redes'}
            </button>

            {mostrarRedes && (
                <div className="lista-redes">
                    {redes.map((red) => (
                        <a
                            key={red.id}
                            className={`link-red ${red.nombre.toLowerCase()}`}
                            href={red.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {red.nombre}
                        </a>
                    ))}
                </div>
            )}
        </footer>
    );
}

export default SocialLinks