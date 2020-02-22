export function pageItemsCountCheck(itemsPage: number) {
    return (itemsPage > 40) ? 40: itemsPage;
}

export function calculateTotalPages(countTotal: number, itemsPage: number) {
    let pagesCount = (countTotal) / itemsPage;
        if (pagesCount % itemsPage > 0) {
            pagesCount= Math.ceil(pagesCount);
        }
        return pagesCount;
}