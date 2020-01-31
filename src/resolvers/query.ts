import { GenresResult } from './../interfaces/genres.interface';
import { dataSources } from './../data/index';
import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args: any): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse (): string {
            return 'Hello to GraphQL Course!!';
        },
        async genres(_: void, __: any, { dataSources}): Promise<GenresResult> {
            try {
                const { count, next, previous, results}: GenresResult= await dataSources.genres.getAll();
                return  {
                    status: true,
                    message: 'Genres correct correctly',
                    count,
                    next,
                    previous,
                    results
                }
            } catch(error) { 
                return  {
                    status: false,
                    message: 'Unexpected error: '.concat(error),
                    count: -1,
                    next: null,
                    previous: null,
                    results: [ ]
                }
            }
        }
    }
};

export default resolvers;