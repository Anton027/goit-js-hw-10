import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
import { fetchCountries } from "./js/fetchCountries";
import './css/styles.css';



const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(event => {
    event.preventDefault();
    
    const countries = refs.input.value;

    fetchCountries(countries).then(data => {
        if (data.length > 2 && data.length < 10) {
            refs.countryList.innerHTML = 
            data.map(country => `<li>
                <p>
                    <img src="${country.flags.svg}" alt="${country.name.official}" width="17" height="13"/>
                    ${country.name.common}
                </p>
            </li>`).join('');
        } else if (data.length < 2) {
            refs.countryList.innerHTML = ' ';
            refs.countryInfo.innerHTML =
                data.map(country => 
                `<div>
                    <h3>
                        <img src="${country.flags.svg}" alt="${country.name.official}" width="17" height="13"/>
                        ${country.name.official}
                    </h3>
                    <p><b>Capital: </b>${country.capital}</p>
                    <p><b>Population: </b>${country.population}</p>
                    <p><b>Languages: </b>${country.languages}</p>
                </div>`
                ).join('');
        } else if (data.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
    })
}, DEBOUNCE_DELAY));
