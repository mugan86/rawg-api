import { GenreItem } from "./../interfaces/genres.interface";
import { RAWG } from "./rawg";
import { GenresResult } from "./../interfaces/genres.interface";


export class Genres extends RAWG {
    constructor() {
        super();
    }

    async getAll(): Promise<GenresResult> {
        return await this.get("genres", {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<GenreItem> {
        return await this.get(`genres/${ id }`, {
            cacheOptions: { ttl: 60 }
        });
    }
}