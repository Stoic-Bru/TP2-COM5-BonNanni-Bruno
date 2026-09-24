import Experiencia from "./Experiencia"
import fotoPerfil from "../assets/foto-perfil.jpeg"
import "../index.css"
const MainHome = ({ lenguajes }) => {


    return (
        <div>

            <div className="contenedor-titulo">
                <img className="foto" src={fotoPerfil} alt="" />
                <h1 className="titulo">Bruno Bon Nanni</h1>
            </div>
            <div className="contenedor-section">
                <div>
                    <section className="sobreMi" id="sobreMi">
                        <div>
                            <h2 className="titulos">Sobre mi</h2>
                            <p className="info">
                                Tengo 19 años, soy estudiante en la tecnicatura de programacion
                                situada en UTN-FRT, me gusta mucho la programacion y el desarrollo
                                de software, soy una persona proactiva, responsable y comprometida
                                con mis objetivos, siempre busco aprender y mejorar mis
                                habilidades en el campo de la programacion, me gusta trabajar en
                                equipo y colaborar con otros para lograr resultados exitosos,
                                estoy dispuesto a enfrentar nuevos desafios y contribuir al exito
                                de cualquier proyecto en el que participe.
                            </p>
                        </div>
                    </section>
                </div>

                <section className="educacion" id="educacion">
                    <div>
                        <h2 className="titulos">Educacion</h2>
                        <p className="info">
                            Recibi la educacion basica en el colegio Nueva Concepcion, donde
                            rendi el examen de ingles <em>trinity</em> despues me cambie a la
                            institucion Colegio Suizo donde rendi dos examenes internacionales
                            de ingles, el <em>Pearson certificate</em> y el
                            <em>First Certificate Exam (FCE)</em> para terminar ahi mi
                            educacion secundaria, estuve un año en la carrera de ingenieria
                            informatica en la UNT (quinta agronomica) y actualmente voy en
                            direccion a recibirme en la tecnicatura de programacion en la
                            UTN-Frt.
                        </p>
                    </div>
                </section>

                <section className="experiencia" id="experiencia">
                    <div>
                        <h2 className="titulos">Experiencia</h2>
                        <p className="info">
                            Tengo experiencia en el area de programacion, he trabajado en
                            proyectos individuales y en equipo, soy capaz de adaptarme a
                            nuevas tecnologias y resolver problemas de manera eficiente.
                            Ademas, tengo experiencia en el uso de herramientas de control de
                            versiones como Git, lo que me permite colaborar de manera efectiva
                            en proyectos de desarrollo de software.
                        </p>
                        <p>Se usar los siguientes lenguajes de programacion:</p>
                        <ul className="lista-lenguajes">
                            {lenguajes.map((lenguaje, index) => (
                                <li key={index}>{lenguaje}</li>
                            ))}
                        </ul>

                    </div>

                </section>
            </div>
            <Experiencia />
        </div>


    )
}

export default MainHome