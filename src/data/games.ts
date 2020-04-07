import { RAWG } from "./rawg";
import { GamesResult } from "./../interfaces/games.interface";

export class Games extends RAWG {
    constructor() {
        super();
    }

    async getAll(page: number = 1, itemsPerPage: number = 20): Promise<GamesResult> {
        return await this.get(`games?page=${page}&page_size=${itemsPerPage}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<GamesResult> {
        return await this.get(`games/${ id }`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDataBetweensGames(start: string, finish: string, page: number = 1, itemsPerPage: number = 20) {
        return await this.get(`games?page=${page}&page_size=${itemsPerPage}&dates=${ start },${finish}&platforms=18,16,15,27`, {
            cacheOptions: { ttl: 60 }
        });
    }
}