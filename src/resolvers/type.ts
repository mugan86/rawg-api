import { IResolvers } from "graphql-tools";


const resolversTypes: IResolvers = { 
    Game: {
        platforms: parent => {
            return parent.platforms;
        },
        rating: parent => {
            return {
                value: parent.rating,
                top: parent.rating_top,
                count: parent.ratings_count,
                info: String(parent.rating).concat("/").concat(String(parent.rating_top)).concat(" (")
                .concat(String(parent.ratings_count)).concat(")")
            }
        },
        img: parent => parent.background_image
    }
};

export default resolversTypes;