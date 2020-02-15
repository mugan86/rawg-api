import MongoClient from "mongodb";
import chalk from "chalk";
class Database {
    async init() {
        const MONGO_DB = String(process.env.DATABASE) || "mongodb://localhost:27017/jwt-users";
        const client = await MongoClient.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db();
        // Para monotorizar es estado de la conexión
        if (client.isConnected()) {
            console.log("======DATABASE======");
            console.log(`STATUS:${chalk.greenBright("ONLINE")}`);
            console.log(`NAME: ${chalk.greenBright(db.databaseName)}`);
        }
        return db;
    }
}
export default Database;
