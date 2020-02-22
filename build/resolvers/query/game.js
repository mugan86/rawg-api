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
const resolversGame = {
    Query: {
        games(_, { page, itemsPage }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { count, next, previous, results } = yield dataSources.games.getAll(page, itemsPage);
                    return {
                        status: true,
                        message: "Games correct correctly",
                        count,
                        page,
                        itemsPage,
                        next,
                        previous,
                        results
                    };
                }
                catch (error) {
                    return {
                        status: false,
                        message: "Unexpected error: ".concat(error),
                        count: -1,
                        next: undefined,
                        previous: undefined,
                        results: []
                    };
                }
            });
        },
        game(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const game = yield dataSources.games.getItem(id);
                    return {
                        status: true,
                        message: `Games with ${id} correct correctly`,
                        game
                    };
                }
                catch (error) {
                    console.log;
                    return {
                        status: false,
                        message: "Unexpected error: ".concat(error),
                        game: undefined
                    };
                }
            });
        }
    }
};
exports.default = resolversGame;
