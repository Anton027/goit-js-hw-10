import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
import { fetchCountries } from "./js/fetchCountries";
import { countriesBuildList } from "./js/countriesBuildList";
import { countriesBuildContainer } from "./js/countriesBuildContainer";
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
    const countriesToTrim = countries.trim();

    if (countriesToTrim === '') {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
    }

    fetchCountries(countriesToTrim).then(data => {
        if (data.length > 2 && data.length < 10) {
            refs.countryInfo.innerHTML = '';
            refs.countryList.innerHTML =
                countriesBuildList(data);
        } else if (data.length < 2) {
            refs.countryList.innerHTML = '';
            refs.countryInfo.innerHTML =
                countriesBuildContainer(data);
        } else if (data.length > 10) {
            Notiflix.Notify.info(
                'Too many matches found. Please enter a more specific name.'
            );
        }
    })
        .catch(() => {
            Notiflix.Notify.failure(
                'Oops, there is no country with that name'
            );
        })
}, DEBOUNCE_DELAY));
