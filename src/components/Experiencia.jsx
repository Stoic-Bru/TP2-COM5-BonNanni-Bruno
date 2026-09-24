import netflixStack from "../assets/netflix-stack.gif"
import netflix from "../assets/netflix.avif"
import WA from "../assets/WA.avif"
import "../index.css"
const Experiencias = () => {


    return (

        <div>

            <section className="proyectos" id="proyectos">
                <div className="contenedor-card">
                    <div className="card h-100">
                        <img src={netflix} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Web de peliculas</h5>
                            <p className="card-text">
                                Esta es una web de peliculas hecha con JavaScript, HTML y CSS,
                                en la cual se pueden buscar, alquilar y ver peliculas online,
                                ademas de crear una cuenta para guardar tus peliculas favoritas
                                y tus metodos de pago.
                            </p>
                            <button href="https://www.netflix.com/ar-en/" className="btn-card">Ir</button>
                        </div>
                    </div>
                    <div className="card h-100">
                        <img src={netflixStack} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Base de datos de la web de peliculas</h5>
                            <p className="card-text">
                                Es una base de datos hecha con MySQL, en la cual se guardan las
                                peliculas, su informacion, metodos de pago, subscripciones y los
                                favoritos de los usuarios de la web.
                            </p>
                            <button href="https://redis.io/insight/" className="btn-card">Ir</button>
                        </div>
                    </div>
                    <div className="card h-100">
                        <img src={WA} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Web de comunicacion</h5>
                            <p className="card-text">
                                Es una pagina web de comunicacion hecha con JavaScript, HTML y
                                CSS, en la cual se pueden enviar mensajes, crear grupos y
                                agregar contactos. Es universal y debido a su codigo es
                                coimpatible con cualquier dispositivo, ademas de ser muy rapida
                                y facil de usar.
                            </p>
                            <button href="https://web.whatsapp.com/" className="btn-card">Ir</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experiencias