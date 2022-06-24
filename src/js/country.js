import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
import { fetchCountries } from "./js/fetchCountries";
import contryCardTmpl from './templates/country-card.hbs';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
    console.log(e.target.value);
};
// // const fetchCountries = () => {

// // }

fetch('https://restcountries.com/v3.1/all')
    .then(response => {
    // console.log(response.json());

    return response.json();
    })
    .then(country => {
        console.log(country);
    });
