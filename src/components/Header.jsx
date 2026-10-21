import { useState } from 'react'
import { images } from '../assets.js'

export default function Header({ onContact }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="AGIJ FERT — voltar ao início" onClick={closeMenu}>
        <img src={images.logo} alt="AGIJ FERT — fertilidade do solo e consultoria agro" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span>{menuOpen ? 'Fechar' : 'Menu'}</span>
        <span className="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        <a href="#atuacao" onClick={closeMenu}>Atuação</a>
        <a href="#metodo" onClick={closeMenu}>Método</a>
        <a href="#campo" onClick={closeMenu}>No campo</a>
        <button className="nav-cta" type="button" onClick={() => { closeMenu(); onContact() }}>Falar com a AGIJ</button>
      </nav>
    </header>
  )
}
