import { useState } from 'react';
import './style-components/buscador.css';

function Buscador({ buscar, limpiar }) {
    const [busqueda, setBusqueda] = useState ('');

    const manejarBuscador = (e) => {
        e.preventDefault();
        if (busqueda.trim() === '') return;
        buscar(busqueda.toLowerCase().trim());
    };

    const manejarlimpiar = () => {
        setBusqueda('');
        limpiar();
    };

    return (
        <form onSubmit={manejarBuscador} className='buscador'>
            <input className='buscador-input' type="text" placeholder='Escriba el nombre del pokemon que desea buscar' value={busqueda} 
            onChange={(e) => setBusqueda (e.target.value)}/>

            <button type='submit' className='btn-buscador'>Buscar</button>
            {busqueda && (
                <button type='button' className='btn-buscador' onClick={manejarlimpiar}>Reset</button>
            )}
        </form>
    );
}

export default Buscador;