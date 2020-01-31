import { RAWG } from "./rawg";
import { GenresResult } from "../interfaces/genres.interface";


export class Genres extends RAWG {
    constructor() {
        super();
    }

    async getAll(): Promise<GenresResult> {
        return await this.get('genres', {
            cacheOptions: { ttl: 60 }
        });
    }
}