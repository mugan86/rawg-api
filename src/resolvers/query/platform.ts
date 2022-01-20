
import { IResolvers } from "@graphql-tools/utils";
import { ELEMENT_SELECTS } from "../../config/constants";
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
                    elementSelect: ELEMENT_SELECTS.PLATFORMS,
                    count,
                    next,
                    previous,
                    results
                };
            } catch(error) { 
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(String(error)),
                    count: -1,
                    next: undefined,
                    previous: undefined,
                    results: [ ]
                };
            }
        },
        async platform(_: void, { id }, { dataSources}): Promise<PlatformsResult> {
            try {
                const platform: PlatformItem = await dataSources.platforms.getItem(id);
                // console.log(game);
                return  {
                    status: true,
                    message: `Platform with ${ id } correct correctly`,
                    elementSelect: ELEMENT_SELECTS.PLATFORM,
                    platform
                };
            } catch(error) { 
                console.log;
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(String(error)),
                    platform: undefined
                };
            }
        }
    }
};

export default resolversPlatform;