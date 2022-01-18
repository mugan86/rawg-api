import { IResolvers } from "@graphql-tools/utils";

const resolversTypesPlatform: IResolvers = { 
    Platform: {
        img: parent => parent.image_background,
        gamesTotal: parent => parent.games_count
    }
};

export default resolversTypesPlatform;