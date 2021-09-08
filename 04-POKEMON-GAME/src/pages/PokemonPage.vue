<template>
    <h1 v-if="!pokemon" class="fade-in">Cargando la información...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon?.id" :showPokemon="showPokemon" />
        <PokemonOption :pokemons="pokemonArr" @selection="checkAnswer" />
        <template v-if="showAnswer">
            <h3>{{ message }}</h3>
            <button @click="resetGame()">Reiniciar</button>
        </template>
    </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOption from "@/components/PokemonOption";

import getPokemonsOptions from "@/helpers/getPokemonOptions";

export default {
    name: "PokemonPage",
    components: {
        PokemonPicture,
        PokemonOption,
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: "",
        };
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonsOptions();
            const rnfInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonArr[rnfInt];
        },
        checkAnswer(data) {
            this.showPokemon = data.id === this.pokemon.id;
            this.showAnswer = true;
            this.message = this.showPokemon
                ? "Eres un maestro pokemon"
                : "Haz fallado";
        },
        resetGame() {
            this.pokemonArr = [];
            this.pokemon = null;
            this.showPokemon = false;
            this.showAnswer = false;
            this.message = "";
            this.mixPokemonArray();
        },
    },
    mounted() {
        this.mixPokemonArray();
    },
};
</script>
