import { GenresResult, GenreItem } from "./../interfaces/genres.interface";
import { IResolvers } from "graphql-tools";
import { GamesResult, GameItem } from "../interfaces/games.interface";
import { PlatformsResult, PlatformItem } from "../interfaces/platforms.interface";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        async genre(_: void, { id }, { dataSources}): Promise<GenresResult> {
            try {
                const genre: GenreItem= await dataSources.genres.getItem(id);
                return {
                    status: true,
                    message: `Genre with ID ${ id } load successfully`,
                    genre
                }
            } catch (e) {
                return {
                    status: false,
                    message: "Unexpected error: ".concat(e),
                    genre: undefined
                }
            }
            
        },
        async genres(_: void, __ , { dataSources}): Promise<GenresResult> {
            try {
                const { count, next, previous, results}: GenresResult= await dataSources.genres.getAll();
                return  {
                    status: true,
                    message: "Genres correct correctly",
                    count,
                    next,
                    previous,
                    results
                }
            } catch(error) { 
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    count: -1,
                    next: undefined,
                    previous: undefined,
                    results: [ ]
                }
            }
        },
        async games(_: void, { page } , { dataSources}): Promise<GamesResult> {
            try {
                const { count, next, previous, results}: GamesResult= await dataSources.games.getAll(page);
                return  {
                    status: true,
                    message: "Games correct correctly",
                    count,
                    next,
                    previous,
                    results
                }
            } catch(error) { 
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    count: -1,
                    next: undefined,
                    previous: undefined,
                    results: [ ]
                }
            }
        },
        async game(_: void, { id }, { dataSources}): Promise<GamesResult> {
            try {
                const game: GameItem = await dataSources.games.getItem(id);
                // console.log(game);
                return  {
                    status: true,
                    message: `Games with ${ id } correct correctly`,
                    game
                }
            } catch(error) { 
                console.log
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    game: undefined
                }
            }
        },
        async platforms(_: void, __, {dataSources}): Promise<PlatformsResult> {
            try {
                const { count, next, previous, results}: PlatformsResult =  await dataSources.platforms.getAll();
                return  {
                    status: true,
                    message: "Platforms load correctly",
                    count,
                    next,
                    previous,
                    results
                }
            } catch(error) { 
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    count: -1,
                    next: undefined,
                    previous: undefined,
                    results: [ ]
                }
            }
        },
        async platform(_: void, { id }, { dataSources}): Promise<PlatformsResult> {
            try {
                const platform: PlatformItem = await dataSources.platforms.getItem(id);
                // console.log(game);
                return  {
                    status: true,
                    message: `Platform with ${ id } correct correctly`,
                    platform
                }
            } catch(error) { 
                console.log
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    platform: undefined
                }
            }
        },
    }
};

export default resolvers;