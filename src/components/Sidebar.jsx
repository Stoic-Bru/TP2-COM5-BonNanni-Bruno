import { NavLink } from 'react-router-dom'
import { useThemeStore } from '../store/useThemeStore'

const Sidebar = () => {
    const { modoOscuro, alternarTema } = useThemeStore()

    return (

        <aside style={{ width: '30%', padding: '20px', borderRight: '1px solid #ccc' }}>
            <h2>Bon Nanni Bruno</h2>
            <h3>Desarrollador de Software</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    Home
                </NavLink>
                <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    Sobre mí
                </NavLink>
                <NavLink to="/skills" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    Habilidades
                </NavLink>
                <NavLink to="/projects" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    Proyectos
                </NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    Contacto
                </NavLink>
            </nav>

            <div style={{ marginTop: '40px' }}>
                <button onClick={alternarTema} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                    {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
                </button>
            </div>
        </aside>
    )
}

export default Sidebar