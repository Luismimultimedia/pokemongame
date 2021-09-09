<template>
    <div class="pokemon-container">
        <img
            v-if="!showPokemon"
            class="hidden-pokemon"
            :src="imgSrc"
            alt="pokemon"
        />
        <img v-else class="fade-in" :src="imgSrc" alt="pokemon" />
    </div>
</template>

<script>
export default {
    name: "PokemonPicture",
    props: {
        pokemonId: {
            default: 1,
            type: Number,
            required: true,
        },
        showPokemon: {
            default: false,
            type: Boolean,
            required: true,
        },
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        },
    },
};
</script>

<style scoped>
img {
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}

.pokemon-container {
    height: 200px;
}
</style>
