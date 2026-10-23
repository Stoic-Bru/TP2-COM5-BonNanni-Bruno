import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useThemeStore } from './store/useThemeStore'
import './App.css';

const App = () => {
  const modoOscuro = useThemeStore((state) => state.modoOscuro)

  const estilosApp = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: modoOscuro ? '#121212' : '#ffffff',
    color: modoOscuro ? '#ffffff' : '#000000',
  }

  return (
    <div style={estilosApp}>
      <Sidebar />
      <main style={{ width: '70%', padding: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App