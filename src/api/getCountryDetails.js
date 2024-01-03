import axios from "axios"

export const getCountryDetails = async (countryName) => {
    return axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res)
        .catch(err => err)
}

const getCountryBorderAbbreviations = async (borderName) => {
    return axios.get(`https://restcountries.com/v3.1/alpha/${borderName}?fields=name`)
        .then(res => res)
        .catch(err => err)
}

export const getBorderNames = async (borderAbbreviations) => {
    // map the requests
    let requests = borderAbbreviations.map(abbreviation => getCountryBorderAbbreviations(abbreviation));

    // remember this in retro notes
    return Promise.all(requests)
        .then(res => res)
        .catch(err => err)
}