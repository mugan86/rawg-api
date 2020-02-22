"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolversTypesPlatform = {
    Platform: {
        img: parent => parent.image_background,
        gamesTotal: parent => parent.games_count
    }
};
exports.default = resolversTypesPlatform;
