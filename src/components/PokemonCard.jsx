import './style-components/pokemon-card.css'

function PokemonCard({ pokemon }) {
    return (
        <div className='tarjeta-pkm'>
            <span className='pokemon-id'>#{String(pokemon.id).padStart(3, '0')}</span>

            <img src={pokemon.imagen} alt={pokemon.name} className='imagen-pkm'/>
            <h3 className="pokemon-nombre">{pokemon.name}</h3>

            <div className='tipos-pkm'>
                {pokemon.tipos.map((tipo, idx) => (
                    <span key={idx} className={`tipo-${tipo}`}>
                        {tipo}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default PokemonCard