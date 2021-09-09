import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe('Pruebas del componente PokemonPicture', () => {
    test('Debe de hacer prueba con el snapshot ', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 3,
                showPokemon: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('Debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy() 
        expect(img1.classes()).toContain('hidden-pokemon')
        expect(img2).toBe(undefined)

        expect(wrapper.props().pokemonId).toBe(100) 
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('Debe de mostrar si el showPokemon es true', () => {
                const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })
        const [img1] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img1.classes()).toContain('fade-in')
        expect(img1.attributes().src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    });
});