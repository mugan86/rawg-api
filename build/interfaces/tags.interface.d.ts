export interface TagsResult {
    status: boolean;
    message: string;
    count?: number;
    next?: string;
    previous?: string;
    page?: number;
    itemsPage?: number;
    totalPages?: number;
    results?: TagItem[];
    tag?: TagItem;
}
export interface TagItem {
    id: number;
    name: string;
    slug: string;
}
