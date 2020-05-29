"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = void 0;
const tags_1 = require("./tags");
const genres_1 = require("./genres");
const games_1 = require("./games");
const platforms_1 = require("./platforms");
exports.dataSources = {
    Games: games_1.Games,
    Genres: genres_1.Genres,
    Platforms: platforms_1.Platforms,
    Tags: tags_1.Tags
};
