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
    },
    Tag: {
        img: parent => parent.image_background,
    },
    Platform: {
        img: parent => parent.image_background,
        gamesTotal: parent => parent.games_count
    },
    ResultTags: {
        itemsPage: (parent) => pageItemsCountCheck(parent.itemsPage),
        totalPages: (parent) => calculateTotalPages(parent.count, pageItemsCountCheck(parent.itemsPage))
    },
    ResultGames: {
        itemsPage: (parent) => pageItemsCountCheck(parent.itemsPage),
        totalPages: (parent) => calculateTotalPages(parent.count, pageItemsCountCheck(parent.itemsPage))
    },
    Clips: {
        low: (parent) => parent["320"],
        medium: (parent) => parent["640"]
    }
};
function pageItemsCountCheck(itemsPage) {
    return (itemsPage > 40) ? 40 : itemsPage;
}
function calculateTotalPages(countTotal, itemsPage) {
    let pagesCount = (countTotal) / itemsPage;
    if (pagesCount % itemsPage > 0) {
        pagesCount = Math.ceil(pagesCount);
    }
    return pagesCount;
}
exports.default = resolversTypes;
