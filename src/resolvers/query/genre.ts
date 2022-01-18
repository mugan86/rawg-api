import { GenresResult, GenreItem } from "./../../interfaces/genres.interface";
import { IResolvers } from "@graphql-tools/utils";

// Los resolvers de las operaciones de consulta para devolver información
const resolversGenre: IResolvers = {
    Query: {
        async genre(_: void, { id }, { dataSources}): Promise<GenresResult> {
            try {
                const genre: GenreItem= await dataSources.genres.getItem(id);
                return {
                    status: true,
                    message: `Genre with ID ${ id } load successfully`,
                    genre
                };
            } catch (e) {
                return {
                    status: false,
                    message: "Unexpected error: ".concat(String(e)),
                    genre: undefined
                };
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
        }
    }
};

export default resolversGenre;