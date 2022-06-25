export const countriesBuildContainer = (data) => {
    return data.map(country => 
                    `<div>
                        <h3>
                            <img
                                src="${country.flags.svg}" 
                                alt="${country.name.common}"
                                width="17" height="13"
                            />
                            ${country.name.common}
                        </h3>
                        <p><b>Capital: </b>${country.capital}</p>
                        <p><b>Population: </b>${country.population}</p>
                        <p><b>Languages: </b>${Object.values(country.languages)}</p>
                    </div>`
    ).join('');
}