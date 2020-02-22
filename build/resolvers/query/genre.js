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
const resolversGenre = {
    Query: {
        genre(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const genre = yield dataSources.genres.getItem(id);
                    return {
                        status: true,
                        message: `Genre with ID ${id} load successfully`,
                        genre
                    };
                }
                catch (e) {
                    return {
                        status: false,
                        message: "Unexpected error: ".concat(e),
                        genre: undefined
                    };
                }
            });
        },
        genres(_, __, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { count, next, previous, results } = yield dataSources.genres.getAll();
                    return {
                        status: true,
                        message: "Genres correct correctly",
                        count,
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
        }
    }
};
exports.default = resolversGenre;
