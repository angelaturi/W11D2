export const selectAllPokemon = (state) => {
    // {pokemon: {1: {...}, 2: {...}}}
    // debugger
    return Object.values(state.entities.pokemon)
}