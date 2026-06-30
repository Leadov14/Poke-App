import { useState } from 'react';
import './style-pages/contacto.css';

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarEnvio = (e) => {
        evento.preventDefault();
        
        console.log(formulario);
        setEnviado(true);
    };

    return (
        <div className="contenedor-contacto">
            

            {enviado ? (
                <div className="mensaje-exito">
                    <h3>¡Mensaje enviado con exito!</h3>
                    <p>Recibiras una respuesta en 48hs</p>
                </div>
            ) : (
                <form onSubmit={manejarEnvio} className="formulario-contacto">
                    <h3 className='titulo-contacto'>Contactate con nosotros</h3>
                    <div className="grupo-input">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formulario.nombre}
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>

                    <div className="grupo-input">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email" 
                            id="email"
                            name="email"
                            value={formulario.email}
                            onChange={manejarCambio}
                            required
                        />
                    </div>

                    <div className="grupo-input">
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formulario.mensaje}
                            onChange={manejarCambio}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            )}
        </div>
    );
}

export default Contacto;