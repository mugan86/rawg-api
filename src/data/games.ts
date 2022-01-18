import { RAWG } from "./rawg";
import { GamesResult } from "./../interfaces/games.interface";

export class Games extends RAWG {
    constructor() {
        super();
    }

    async getAll(page = 1, itemsPerPage = 20): Promise<GamesResult> {
        return await this.get(`games?page=${page}&page_size=${itemsPerPage}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<GamesResult> {
        return await this.get(`games/${ id }`, {
            cacheOptions: { ttl: 60 }
        });
    }
    // TODO 
    /* async getDataBetweensGames() {

    }*/
}