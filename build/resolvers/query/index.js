"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_merge_resolvers_1 = __importDefault(require("graphql-merge-resolvers"));
const game_1 = __importDefault(require("./game"));
const genre_1 = __importDefault(require("./genre"));
const platform_1 = __importDefault(require("./platform"));
const tag_1 = __importDefault(require("./tag"));
const queryResolvers = graphql_merge_resolvers_1.default.merge([
    game_1.default,
    genre_1.default,
    platform_1.default,
    tag_1.default
]);
exports.default = queryResolvers;
