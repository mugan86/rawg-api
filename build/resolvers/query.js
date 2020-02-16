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
const resolvers = {
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
        },
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
        },
        platforms(_, __, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { count, next, previous, results } = yield dataSources.platforms.getAll();
                    return {
                        status: true,
                        message: "Platforms load correctly",
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
        },
        platform(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const platform = yield dataSources.platforms.getItem(id);
                    return {
                        status: true,
                        message: `Platform with ${id} correct correctly`,
                        platform
                    };
                }
                catch (error) {
                    console.log;
                    return {
                        status: false,
                        message: "Unexpected error: ".concat(error),
                        platform: undefined
                    };
                }
            });
        },
        tags(_, { page, itemsPage }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { count, next, previous, results } = yield dataSources.tags.getAll(page, itemsPage);
                    return {
                        status: true,
                        message: "Tags load correctly",
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
        tag(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const tag = yield dataSources.tags.getItem(id);
                    return {
                        status: true,
                        message: `Tag with ${id} correct correctly`,
                        tag
                    };
                }
                catch (error) {
                    console.log;
                    return {
                        status: false,
                        message: "Unexpected error: ".concat(error),
                        tag: undefined
                    };
                }
            });
        },
    }
};
exports.default = resolvers;
