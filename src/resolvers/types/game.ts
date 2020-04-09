import { IResolvers } from "graphql-tools";


const resolversTypesGames: IResolvers = { 
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
            };
        },
        img: parent => parent.background_image,
        platformsIds: parent => {
            const ids = [];
            const platforms = parent.platforms;
            for (let i = 0; i < parent.platforms.length; i++) {
                ids.push(platforms[i].platform.id);
            }
            return ids;
        },
        tagsIds: parent => {
            return elementIds(parent.tags);
        },
        genresIds: parent => {
            /*const ids = [];
            const tags = parent.tags;
            for (let i = 0; i < parent.tags.length; i++) {
                ids.push(tags[i].id);
            }
            return ids;*/
            return elementIds(parent.genres);
        }
    }
};

function elementIds(objects: any) {
    const ids = [];
    for (let i = 0; i < objects.length; i++) {
        ids.push(objects[i].id);
    }
    return ids;
}

export default resolversTypesGames;