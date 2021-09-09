import pokemonApi from "@/services/pokemonApi";

describe('Axios test pokemon api', () => {
    test('Axios debe estar configrado con el api de pokemon', () => {
        const baseUrl = pokemonApi.defaults.baseURL
        expect(baseUrl).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});