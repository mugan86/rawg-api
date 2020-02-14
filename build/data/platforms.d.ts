import { RAWG } from "./rawg";
import { PlatformsResult, PlatformItem } from "../interfaces/platforms.interface";
export declare class Platforms extends RAWG {
    constructor();
    getAll(page?: number): Promise<PlatformsResult>;
    getItem(id: string): Promise<PlatformItem>;
}
