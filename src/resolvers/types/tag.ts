import { IResolvers } from "@graphql-tools/utils";


const resolversTypesTags: IResolvers = { 
    Tag: {
        img: parent => parent.image_background
    }
};

export default resolversTypesTags;