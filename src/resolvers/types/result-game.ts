import { IResolvers } from "graphql-tools";
import { pageItemsCountCheck, calculateTotalPages } from "./../../lib/pagination";


const resolversTypesResGames: IResolvers = { 
    ResultGames: {
        itemsPage: (parent) => pageItemsCountCheck(parent.itemsPage),
        totalPages: (parent) => calculateTotalPages(parent.count, pageItemsCountCheck(parent.itemsPage))
    }
};

export default resolversTypesResGames;