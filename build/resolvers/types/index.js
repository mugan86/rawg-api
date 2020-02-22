"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_merge_resolvers_1 = __importDefault(require("graphql-merge-resolvers"));
const clip_1 = __importDefault(require("./clip"));
const game_1 = __importDefault(require("./game"));
const result_tag_1 = __importDefault(require("./result-tag"));
const platform_1 = __importDefault(require("./platform"));
const tag_1 = __importDefault(require("./tag"));
const result_game_1 = __importDefault(require("./result-game"));
const typesResolvers = graphql_merge_resolvers_1.default.merge([
    clip_1.default,
    game_1.default,
    result_tag_1.default,
    platform_1.default,
    tag_1.default,
    result_game_1.default
]);
exports.default = typesResolvers;
