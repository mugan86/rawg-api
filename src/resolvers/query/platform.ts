
import { IResolvers } from "graphql-tools";
import { PlatformsResult, PlatformItem } from "./../../interfaces/platforms.interface";

// Los resolvers de las operaciones de consulta para devolver información
const resolversPlatform: IResolvers = {
    Query: {
        async platforms(_: void, __ , {dataSources }): Promise<PlatformsResult> {
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
        }
    }
};

export default resolversPlatform;