import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOption";
import { pokemons } from "../mocks/pokemons.mock";

describe('Test del componente pokemonOption', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemons
            }
        })
    })

    test('Debe de hacer match en el snapshot', () => {
        console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('Deben de renderizarse 4 elementos', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
    });

    test('Debe de emitir "selection" con sus respectivos valores al hacer click', () => {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')

        expect(wrapper.emitted('selection')[0]).toStrictEqual([{ "id": 151, "name": 'mew' }])
        expect(wrapper.emitted('selection')[1]).toStrictEqual([{ "id": 5, "name": 'pikachu' }])
        expect(wrapper.emitted('selection')[2]).toStrictEqual([{ "id": 245, "name": 'tyranitar' }])
        expect(wrapper.emitted('selection')[3]).toStrictEqual([{ "id": 2, "name": 'charmander' }])
    });
});