// import Notiflix from 'notiflix';
// import { countriesBuildList } from "./js/countriesBuildList";
// import { countriesBuildContainer } from "./js/countriesBuildContainer";
// import { asyncFetchCountries } from "./js/fetchCountries";

export async function searchOfCountry(event) {
        event.preventDefault();

    const countries = refs.input.value;
    const countriesToTrim = countries.trim();

    if (countriesToTrim === '') {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
    }

    try {
        const country = await asyncFetchCountries(countriesToTrim);
        return await country.then(data => {
            if (data.length >= 2 && data.length <= 10) {
                refs.countryInfo.innerHTML = '';
                refs.countryList.innerHTML =
                    countriesBuildList(data);
            } else if (data.length === 1) {
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML =
                    countriesBuildContainer(data);
            } else if (data.length > 10) {
                Notiflix.Notify.info(
                    'Too many matches found. Please enter a more specific name.'
                );
            }
        });
    } catch {
        Notiflix.Notify.failure(
            'Oops, there is no country with that name'
        );
    }
}