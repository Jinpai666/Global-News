import axios from 'axios';
import { Article } from '../types/types'



export interface ApiResponse {
    status: string;
    totalResults: number;
    results: Article[];
}
export async function getNews(countryCode: string): Promise<Article[]> {
    try {
        const response = await axios.get<ApiResponse>(
            `https://newsdata.io/api/1/news?apikey=pub_204629e2423b2aa0ce74b1c53eaf5ff1b8044&country=${countryCode}`,
        );
        console.log('resp',response.data.results);
        return response.data.results
    } catch (error) {
        console.log(error);
        return [];
    }
}
