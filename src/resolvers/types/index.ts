import GMR from "graphql-merge-resolvers";
import resolversTypesClips from "./clip";
import resolversTypesGames from "./game";
import resolversTypesResTags from "./result-tag";
import resolversTypesPlatform from "./platform";
import resolversTypesTags from "./tag";
import resolversTypesResGames from "./result-game";

const typesResolvers = GMR.merge(
    [
        resolversTypesClips,
        resolversTypesGames,
        resolversTypesResTags,
        resolversTypesPlatform,
        resolversTypesTags,
        resolversTypesResGames
    ]
);

export default typesResolvers;