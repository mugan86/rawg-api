import { RAWG } from "./rawg";
import { TagsResult } from "../interfaces/tags.interface";

export class Tags extends RAWG {
    constructor() {
        super()
    }

    async getAll(page: number = 1, itemsPerPage: number = 20): Promise<TagsResult> {
        return await this.get(`tags?page=${page}&page_size=${itemsPerPage}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<TagsResult> {
        return await this.get(`tags/${ id }`, {
            cacheOptions: { ttl: 60 }
        })
    }
}