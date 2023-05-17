export type Article = {
    results:{
        author?: string;
        title: string;
        description?: string;
        link: string;
        image_url?: string;
        publishedAt: string;
        content?: string;
    }

}
export type ApiResponse = {
    status: string;
    totalResults: number;
    results: Article[];
}