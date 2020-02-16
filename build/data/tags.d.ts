import { RAWG } from "./rawg";
import { TagsResult } from "../interfaces/tags.interface";
export declare class Tags extends RAWG {
    constructor();
    getAll(page?: number, itemsPerPage?: number): Promise<TagsResult>;
    getItem(id: string): Promise<TagsResult>;
}
