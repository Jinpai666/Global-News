import axios from 'axios';
import { ApiResponse } from '../types/types'




export async function getNews(countryCode?: string): Promise<ApiResponse> {
    const url = `https://newsdata.io/api/1/news?apikey=pub_204629e2423b2aa0ce74b1c53eaf5ff1b8044&country=${countryCode}`
    try {
        const response = await axios.get<ApiResponse>(
            url
        );
        console.log('resp', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return { status: '', totalResults: 0, results: [] };
    }
}