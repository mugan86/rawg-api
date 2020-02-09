import { IResolvers } from "graphql-tools";


const resolversTypes: IResolvers = { 
    Game: {
        platforms: parent => {
            return parent.platforms;
        }
    }
};

export default resolversTypes;