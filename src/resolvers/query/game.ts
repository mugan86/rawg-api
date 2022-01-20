import { ELEMENT_SELECTS } from "./../../config/constants";
import { IResolvers } from "@graphql-tools/utils";
import { GamesResult, GameItem } from "../../interfaces/games.interface";

const resolversGame: IResolvers = {
  Query: {
    async games(
      _: void,
      { page, itemsPage },
      { dataSources }
    ): Promise<GamesResult> {
      try {
        const { count, next, previous, results }: GamesResult =
          await dataSources.games.getAll(page, itemsPage);
        return {
          status: true,
          message: "Games correct correctly",
          elementSelect: ELEMENT_SELECTS.GAMES,
          count,
          page,
          itemsPage,
          next,
          previous,
          results,
        };
      } catch (error) {
        return {
          status: false,
          message: "Unexpected error: ".concat(String(error)),
          count: -1,
          next: undefined,
          previous: undefined,
          results: [],
        };
      }
    },
    async game(_: void, { id }, { dataSources }): Promise<GamesResult> {
      try {
        const game: GameItem = await dataSources.games.getItem(id);
        // console.log(game);
        return {
          status: true,
          elementSelect: ELEMENT_SELECTS.GAME,
          message: `Games with ${id} correct correctly`,
          game,
        };
      } catch (error) {
        console.log;
        return {
          status: false,
          message: "Unexpected error: ".concat(String(error)),
          game: undefined,
        };
      }
    },
    /**
     * async gamesBetweenDates(_: void, { start, finish, page, itemsPage } , { dataSources}): Promise<GamesResult> {
            try {
                const { count, next, previous, results}: GamesResult= await dataSources.games.getDataBetweensGames(start, finish, page, itemsPage);
                return  {
                    status: true,
                    message: "Games correct correctly",
                    count,
                    page,
                    itemsPage,
                    next,
                    previous,
                    results
                };
            } catch(error) { 
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    count: -1,
                    next: undefined,
                    previous: undefined,
                    results: [ ]
                };
            }
        },
     */
  },
};

export default resolversGame;
