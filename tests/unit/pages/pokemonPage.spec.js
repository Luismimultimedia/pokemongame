import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage"
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOption";

import { pokemons } from "../mocks/pokemons.mock";

describe('Pruebas unitarias en PokemonPage Page', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    });

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('Debe de llamar el mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    });

    test('Debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })
        const pokemonPictureComponent = wrapper.findComponent(PokemonPicture)
        const pokemonOptionsComponent = wrapper.findComponent(PokemonOptions)
        const { pokemonId } = pokemonPictureComponent.props()
        const { pokemons: arrPokemon } = pokemonOptionsComponent.props()

        expect(pokemonPictureComponent.exists()).toBeTruthy()
        expect(pokemonOptionsComponent.exists()).toBeTruthy()
        expect(pokemonId).toBe(151)
        expect(arrPokemon).toStrictEqual(pokemons)
    });

    test('Pruebas con checkAnswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })

        await wrapper.vm.checkAnswer({ id: 151 })

        expect(wrapper.find('h3').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
    });
});