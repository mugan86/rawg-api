import { GenreItem } from "./../interfaces/genres.interface";
import { RAWG } from "./rawg";
import { GenresResult } from "./../interfaces/genres.interface";
export declare class Genres extends RAWG {
    constructor();
    getAll(): Promise<GenresResult>;
    getItem(id: string): Promise<GenreItem>;
}
