export type Article = {
        author?: string;
        title: string;
        description?: string;
        link: string;
        image_url?: string;
        publishedAt: string;
        content?: string;

}
export type ApiResponse = {
    status: string;
    nextPage: string;
    totalResults: number;
    results: Article[];
}