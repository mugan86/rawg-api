import { IResult } from "./../../interfaces/result.interface";
import { IResolvers } from "@graphql-tools/utils";

const typesUnionResolvers: IResolvers = {
  Result: {
    __resolveType(obj: IResult) {
      
      // Only Game has a name field
      if (obj.elementSelect === "Game") {
        return "ResultGame";
      }
      // Only Book has a title field
      if (obj.elementSelect === "Genre") {
        return "ResultGenre";
      }
      if (obj.elementSelect === "Platform") {
        return "ResultPlatform";
      }
      // Only Book has a title field
      if (obj.elementSelect === "Tag") {
        return "ResultTag";
      }

      if (obj.elementSelect === "Games") {
        return "ResultGames";
      }
      // Only Book has a title field
      if (obj.elementSelect === "Genres") {
        return "ResultGenres";
      }
      if (obj.elementSelect === "Platforms") {
        return "ResultPlatforms";
      }
      // Only Book has a title field
      if (obj.elementSelect === "Tags") {
        return "ResultTags";
      }
      return null; // GraphQLError is thrown
    },
  },
};

export default typesUnionResolvers;
