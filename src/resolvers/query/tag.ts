import { IResolvers } from "graphql-tools";
import { TagItem, TagsResult } from "./../../interfaces/tags.interface";

// Los resolvers de las operaciones de consulta para devolver información
const resolversTags: IResolvers = {
    Query: {
        async tags(_: void, { page, itemsPage} , {dataSources }): Promise<TagsResult> {
            try {
                const { count, next, previous, results }: TagsResult =  await dataSources.tags.getAll(page, itemsPage);

                return  {
                    status: true,
                    message: "Tags load correctly",
                    count,
                    page,
                    itemsPage,
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
        async tag(_: void, { id }, { dataSources}): Promise<TagsResult> {
            try {
                const tag: TagItem = await dataSources.tags.getItem(id);
                // console.log(game);
                return  {
                    status: true,
                    message: `Tag with ${ id } correct correctly`,
                    tag
                }
            } catch(error) { 
                console.log
                return  {
                    status: false,
                    message: "Unexpected error: ".concat(error),
                    tag: undefined
                }
            }
        },
    }
};

export default resolversTags;