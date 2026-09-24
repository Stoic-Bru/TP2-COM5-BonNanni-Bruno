import React from 'react'
import { useState } from 'react'
const Footer = ({ redes }) => {

    const [mostrarRedes, setMostrarRedes] = useState(false);

    return (
        <div>
            <footer className="footer">
                <h3 className="titulo-redes">Contacto</h3>
                <button className="boton-contacto" onClick={() => setMostrarRedes(!mostrarRedes)} > {mostrarRedes ? 'Ocultar redes' : 'Ver redes'}
                </button>

                {mostrarRedes && (
                    <div className="lista-redes">
                        {redes.map((red) => (
                            <span key={red.id}>
                                <a
                                    className={red.nombre.toLowerCase()}
                                    href={red.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {red.nombre}
                                </a>
                            </span>
                        ))}
                    </div>
                )}


            </footer>
        </div>
    )
}

export default Footer