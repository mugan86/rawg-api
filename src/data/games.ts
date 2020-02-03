import { RAWG } from "./rawg";
import { GamesResult } from "./../interfaces/games.interface";

export class Games extends RAWG {
    constructor() {
        super()
    }

    async getAll(page: number = 1): Promise<GamesResult> {
        return await this.get(`games?page=${page}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<GamesResult> {
        return await this.get(`games/${ id }`, {
            cacheOptions: { ttl: 60 }
        })
    }


    async getDataBetweensGames() {

    }
}