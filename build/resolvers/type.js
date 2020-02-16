"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolversTypes = {
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
        img: parent => parent.background_image
    },
    Platform: {
        img: parent => parent.image_background,
        gamesTotal: parent => parent.games_count
    },
    ResultTags: {
        totalPages: (parent) => calculateTotalPages(parent.count, parent.itemsPage)
    },
    ResultGames: {
        totalPages: (parent) => calculateTotalPages(parent.count, parent.itemsPage)
    }
};
function calculateTotalPages(countTotal, itemsPage) {
    let pagesCount = (countTotal) / itemsPage;
    if (pagesCount % itemsPage > 0) {
        pagesCount = Math.ceil(pagesCount);
    }
    return pagesCount;
}
exports.default = resolversTypes;
