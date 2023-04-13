import axios from 'axios';
import { Article } from '../types/types';

const apiKey = '05e45c4cb822480891d2b84cef40502f';

export interface ApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export async function getNews(): Promise<Article[]> {
    const response = await axios.get<ApiResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
        { mode: 'cors' }
    );
    return response.data.articles;
}
