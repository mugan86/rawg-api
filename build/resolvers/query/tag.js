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
const resolversTags = {
    Query: {
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
exports.default = resolversTags;
