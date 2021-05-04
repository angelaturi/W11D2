import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_util'
import { selectAllPokemon } from './reducers/selectors'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.selectAllPokemon = selectAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.store = store;
    ReactDOM.render(<Root store={store}/> ,root)
})