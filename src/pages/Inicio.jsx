import { usePokeApi } from '../hook/usePokeApi'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Paginacion'
import Buscador from '../components/Buscador'
import './style-pages/inicio.css';

function Inicio() {
    const {
        listaPokemon,
        cargando,
        error,
        infoPrev,
        infoNext,
        alAvanzar,
        alRetroceder,
        manejarBuscador,
        manejarLimpiar
    } = usePokeApi();

    return (
        <div className="contenedor-inicio">
            <h1>Bienvenido a la PokéApp</h1>

            <Buscador buscar={manejarBuscador} limpiar={manejarLimpiar} />

            {cargando && <h2 className='cargando-pkms'>Cargando Pokémones... </h2>}

            {error && <p className="error-busqueda">{error}</p>}

            {!cargando && (
                <div className='lista-pkm'>
                    {listaPokemon.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}

            <Pagination prev={infoPrev} next={infoNext} onPrevious={alRetroceder} onNext={alAvanzar} />

        </div>
    );
}

export default Inicio;