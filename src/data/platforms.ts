import { RAWG } from "./rawg";
import { PlatformsResult, PlatformItem } from "../interfaces/platforms.interface";

export class Platforms extends RAWG {
    constructor() {
        super();
    }

    async getAll(page = 1): Promise<PlatformsResult> {
        return await this.get(`platforms?page=${page}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<PlatformItem> {
        return await this.get(`platforms/${ id }`, {
            cacheOptions: { ttl: 60 }
        });
    }
}