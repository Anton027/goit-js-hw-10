export const countriesBuildList = (data) => {
    return data.map(country => 
        `<li>
            <p>
                <img
                    src="${country.flags.svg}" 
                    alt="${country.name.common}"
                    width="17" height="13"
                />
                ${country.name.common}
            </p>
        </li>`
    ).join('');
}