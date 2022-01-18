import { IResolvers } from "@graphql-tools/utils";


const resolversTypesClips: IResolvers = { 
    Clips: {
        low: (parent) => parent["320"],
        medium: (parent) => parent["640"]
    }
};


export default resolversTypesClips;