import { RAWG } from "./rawg";
import { PlatformsResult } from "../interfaces/platforms.interface";

export class Platforms extends RAWG {
    constructor() {
        super()
    }

    async getAll(page: number = 1): Promise<PlatformsResult> {
        return await this.get(`platforms?page=${page}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getItem(id: string): Promise<PlatformsResult> {
        return await this.get(`platform/${ id }`, {
            cacheOptions: { ttl: 60 }
        })
    }
}