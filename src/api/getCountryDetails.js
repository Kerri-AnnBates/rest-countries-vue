import axios from "axios"
import { ref } from "vue"

const country = ref({});
const error = ref(null);

export const getCountryDetails = async (countryName) => {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        return res
    } catch (err) {
        return err
    }
}