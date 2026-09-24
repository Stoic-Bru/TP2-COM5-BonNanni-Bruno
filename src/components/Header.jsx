import "../index.css"
const Header = () => {
    return (
        <div>

            <nav className="menu">
                <ul className="lista">
                    <li><a className="item-lista" href="#sobreMi">Sobre Mi</a></li>
                    <li><a className="item-lista" href="#educacion">Educacion</a></li>
                    <li><a className="item-lista" href="#proyectos">Proyectos</a></li>
                    <li><a className="item-lista" href="#contacto">Contacto</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header