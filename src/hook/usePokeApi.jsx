import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL;

const listaPkm = async (results) => {
    const llamada = results.map(async (pkm) => {
        const res = await fetch(pkm.url);
        const data = await res.json();
        return {
            id: data.id,
            name: data.name,
            imagen: data.sprites.other.dream_world.front_default,
            tipos: data.types.map(t => t.type.name)
        };
    });
    return Promise.all(llamada);
};

export function usePokeApi() {
    const [listaPokemon, setListaPokemon] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [infoPrev, setInfoPrev] = useState(null);
    const [infoNext, setInfoNext] = useState(null);

    const cargarPagina = async (url) => {
        setCargando(true);
        setError(null);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status ${res.status}`);
            const datos = await res.json();
            const listadoPkm = await listaPkm(datos.results);

            setListaPokemon(listadoPkm); 
            setInfoPrev(datos.previous);        
            setInfoNext(datos.next);            
        } catch (error) {
            console.error("Error al cargar los Pokémon:", error);
            setError("Error al cargar la lista de Pokémon");
        } finally {
            setCargando(false);
        }
    };

    const manejarBuscador = async (nombrePokemon) => {
        setCargando(true);
        setError(null);

        try {
            const res = await fetch(`${BASE_URL}/pokemon/${nombrePokemon}`);

            if (!res.ok) {
                throw new Error(`No se encontró ningún Pokémon llamado "${nombrePokemon}"`);
            }

            const data = await res.json();
            const pokemonEncontrado = {
                id: data.id,
                name: data.name,
                imagen: data.sprites.other.dream_world.front_default,
                tipos: data.types.map(t => t.type.name)
            };

            setListaPokemon([pokemonEncontrado]);
            setInfoPrev(null);
            setInfoNext(null);
        } catch (error) {
            setListaPokemon([]);
            setError(error.message); 
            setInfoPrev(null);
            setInfoNext(null);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        if (BASE_URL) {
            cargarPagina(`${BASE_URL}/pokemon?limit=30&offset=0`);
        } else {
            setError("El env que contiene el enlace a la api no esta definido");
            setCargando(false);
        }
    }, []);

    const alAvanzar = () => {
        if (infoNext) {
            cargarPagina(infoNext);
        }
    };

    const alRetroceder = () => {
        if (infoPrev) {
            cargarPagina(infoPrev);
        }
    };

    const manejarLimpiar = () => {
        if (BASE_URL) {
            cargarPagina(`${BASE_URL}/pokemon?limit=30&offset=0`);
        }
    };

    return {
        listaPokemon,
        cargando,
        error,
        infoPrev,
        infoNext,
        alAvanzar,
        alRetroceder,
        manejarBuscador,
        manejarLimpiar
    };
}

export default usePokeApi;