import { IResolvers } from "graphql-tools";


const resolversTypesTags: IResolvers = { 
    Tag: {
        img: parent => parent.image_background
    }
};

export default resolversTypesTags;