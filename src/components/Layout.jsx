import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './style-components/layout.css'

function Layout() {
    return (
        <div className='contenedor-layout'>
            <Header />

            <main className='contenido-principal'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout;