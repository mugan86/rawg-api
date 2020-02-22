"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolversTypesGames = {
    Game: {
        platforms: parent => {
            return parent.platforms;
        },
        rating: parent => {
            return {
                value: parent.rating,
                top: parent.rating_top,
                count: parent.ratings_count,
                info: String(parent.rating).concat("/").concat(String(parent.rating_top)).concat(" (")
                    .concat(String(parent.ratings_count)).concat(")")
            };
        },
        img: parent => parent.background_image,
        platformsIds: parent => {
            const ids = [];
            const platforms = parent.platforms;
            for (let i = 0; i < parent.platforms.length; i++) {
                ids.push(platforms[i].platform.id);
            }
            return ids;
        },
        tagsIds: parent => {
            const ids = [];
            const tags = parent.tags;
            for (let i = 0; i < parent.tags.length; i++) {
                ids.push(tags[i].id);
            }
            return ids;
        },
    }
};
exports.default = resolversTypesGames;
