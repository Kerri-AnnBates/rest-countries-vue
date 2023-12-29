import axios from 'axios';
import data from '../../data.json';


export const getLocalCountries = async () => {
    return new Promise((res, rej) => {
        if (data) {
            res(data);
        } else {
            rej("Data not available");
        }
    });
}

export const getCountries = async () => {
    return axios.get("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
        .then(res => res)
        .catch(err => err)
}