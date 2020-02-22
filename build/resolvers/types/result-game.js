"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./../../lib/pagination");
const resolversTypesResGames = {
    ResultGames: {
        itemsPage: (parent) => pagination_1.pageItemsCountCheck(parent.itemsPage),
        totalPages: (parent) => pagination_1.calculateTotalPages(parent.count, pagination_1.pageItemsCountCheck(parent.itemsPage))
    }
};
exports.default = resolversTypesResGames;
