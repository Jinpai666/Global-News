import axios from 'axios';

const apiKey = '05e45c4cb822480891d2b84cef40502f';

export interface Article {
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
}

export interface ApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export async function getNews(): Promise<Article[]> {
    try {
        const response = await axios.get<ApiResponse>(
            `https://newsapi.org/v2/top-headlines?language=nl&pageSize=40&apiKey=${apiKey}`,
        );
        return response.data.articles;
    } catch (error) {
        console.log(error);
        return [];
    }
}
