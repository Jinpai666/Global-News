import axios from 'axios';
import { Country } from "../types/country"


export async function getCountries(): Promise<Country[]> {
    const url = `https://restcountries.com/v3.1/all`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}
