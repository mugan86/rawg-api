"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Games = void 0;
const rawg_1 = require("./rawg");
class Games extends rawg_1.RAWG {
    constructor() {
        super();
    }
    getAll(page = 1, itemsPerPage = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`games?page=${page}&page_size=${itemsPerPage}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`games/${id}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getDataBetweensGames(start, finish, page = 1, itemsPerPage = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`games?page=${page}&page_size=${itemsPerPage}&dates=${start},${finish}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
}
exports.Games = Games;
