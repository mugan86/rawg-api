import { RAWG } from "./rawg";
import { GamesResult } from "./../interfaces/games.interface";

export class Games extends RAWG {
    constructor() {
        super()
    }

    async getAll(): Promise<GamesResult> {
        return await this.get("games", {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDataBetweensGames() {

    }
}