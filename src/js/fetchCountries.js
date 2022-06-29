
export const fetchCountries = (name) => {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fileds=name,capital,population,languages,flags`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });
}
// https://restcountries.com/v3.1/name/${name}
// https://restcountries.com/v2/{service}?fields=${name},{field},{field}
export const asyncFetchCountries = async (name) => {
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fileds=name,capital,population,languages,flags`
    );
    
    return await response.json();
}