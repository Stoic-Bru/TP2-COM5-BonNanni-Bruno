const Skills = () => {
    const lenguajes = ["JavaScript", "HTML", "CSS", "MySQL"];

    return (
        <div className="skills-container">
            <h2>Habilidades</h2>
            <p>
                Tengo experiencia en el área de programación, he trabajado en
                proyectos individuales y en equipo, soy capaz de adaptarme a
                nuevas tecnologías y resolver problemas de manera eficiente.
                Además, tengo experiencia en el uso de herramientas de control de
                versiones como Git.
            </p>
            <p>Sé usar los siguientes lenguajes de programación:</p>
            <ul className="lista-lenguajes">
                {lenguajes.map((lenguaje, index) => (
                    <li key={index} className="skill-item">{lenguaje}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skills