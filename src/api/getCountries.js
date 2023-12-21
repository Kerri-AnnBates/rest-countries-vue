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