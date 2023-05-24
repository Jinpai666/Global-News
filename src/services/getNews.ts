import axios from 'axios';
import { Article } from "../types/article"

 type NewsApiResponse  = {
    status: string;
    nextPage: string;
    totalResults: number;
    results: Article[];
}



export async function getNews(countryCode?: string, nextArticleId?: string): Promise<NewsApiResponse> {
    const url = `https://newsdata.io/api/1/news?apikey=pub_204629e2423b2aa0ce74b1c53eaf5ff1b8044&country=${countryCode}&language=en,pl&page=${nextArticleId}`
    try {
        const response = await axios.get<NewsApiResponse>(
            url
        );
        return response.data;
    } catch (error) {
        return { status: '', totalResults: 0, results: [], nextPage:'' };
    }
}