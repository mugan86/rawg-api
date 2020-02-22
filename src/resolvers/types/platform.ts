import { IResolvers } from "graphql-tools";

const resolversTypesPlatform: IResolvers = { 
    Platform: {
        img: parent => parent.image_background,
        gamesTotal: parent => parent.games_count
    }
};

export default resolversTypesPlatform;