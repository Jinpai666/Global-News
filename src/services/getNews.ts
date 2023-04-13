import axios, { AxiosRequestConfig } from 'axios';
import { Article } from '../types/types'

const apiKey = '05e45c4cb822480891d2b84cef40502f';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    mode?: string;
}

export interface ApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export async function getNews(): Promise<Article[]> {
    try {
        const options: CustomAxiosRequestConfig = {
            mode: 'cors',
        };

        const response = await axios.get<ApiResponse>(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
            options
        );

        return response.data.articles;
    } catch (error) {
        console.log(error);
        return [];
    }
}
