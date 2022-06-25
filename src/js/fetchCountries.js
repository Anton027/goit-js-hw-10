export const fetchCountries = (name) => {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            Notiflix.Notify.failure('Oops, there is no country with that name');
        });
}
// https://restcountries.com/v3.1/name/${name}
// https://restcountries.com/v2/{service}?fields=${name},{field},{field}