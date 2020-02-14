import { RAWG } from "./rawg";
import { GamesResult } from "./../interfaces/games.interface";
export declare class Games extends RAWG {
    constructor();
    getAll(page?: number, itemsPerPage?: number): Promise<GamesResult>;
    getItem(id: string): Promise<GamesResult>;
    getDataBetweensGames(): Promise<void>;
}
