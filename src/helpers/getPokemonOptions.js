import pokemonApi from "@/services/pokemonApi";

export const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsOptions = async () => {
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonsNames(mixPokemons.splice(0, 4))
    return pokemons
}

export const getPokemonsNames = async (pokemonsId = []) => {
    const resp = pokemonsId.map((id) => pokemonApi.get(`/${id}`))
    const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(resp)
    return [
        { name: pokemon1.data.name, id: pokemon1.data.id },
        { name: pokemon2.data.name, id: pokemon2.data.id },
        { name: pokemon3.data.name, id: pokemon3.data.id },
        { name: pokemon4.data.name, id: pokemon4.data.id },
    ]
}

export default getPokemonsOptions