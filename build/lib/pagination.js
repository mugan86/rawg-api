"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalPages = exports.pageItemsCountCheck = void 0;
function pageItemsCountCheck(itemsPage) {
    return (itemsPage > 40) ? 40 : itemsPage;
}
exports.pageItemsCountCheck = pageItemsCountCheck;
function calculateTotalPages(countTotal, itemsPage) {
    let pagesCount = (countTotal) / itemsPage;
    if (pagesCount % itemsPage > 0) {
        pagesCount = Math.ceil(pagesCount);
    }
    return pagesCount;
}
exports.calculateTotalPages = calculateTotalPages;
