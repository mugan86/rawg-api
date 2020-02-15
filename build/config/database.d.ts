import MongoClient from "mongodb";
declare class Database {
    init(): Promise<MongoClient.Db>;
}
export default Database;
