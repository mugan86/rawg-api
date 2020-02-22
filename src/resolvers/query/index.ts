import GMR from "graphql-merge-resolvers";
import resolversGame from "./game";
import resolversGenre from "./genre";
import resolversPlatform from "./platform";
import resolversTags from "./tag";

const queryResolvers = GMR.merge(
    [
        resolversGame,
        resolversGenre,
        resolversPlatform,
        resolversTags
    ]
);

export default queryResolvers;