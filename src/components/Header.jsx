import './style-components/header.css';
import logo from '../assets/logo-pkm.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='contenedor-header'>

            <img className='logo-header' src={logo} alt="Logo" />

            <nav className='nav-header'>
                <NavLink to="/" className="enlace-nav">Inicio</NavLink>
                <NavLink to="/contacto" className="enlace-nav">Contacto</NavLink>
            </nav>

        </header>
    )
}

export default Header;