import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import './index.css'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: "*",
                element: <h2 className='error-pag'>404 - Página no encontrada</h2>
            }
        ]
    }
])