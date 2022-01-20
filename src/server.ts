import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from "apollo-server-core";
import compression from "compression";
import express, { Application } from "express";
import { GraphQLSchema } from "graphql";
import { createServer, Server } from "http";
import { dataSources } from "./data";
import environments from "./config/environments";

class GraphQLServer {
  // Propiedades
  private app!: Application;
  private httpServer!: Server;
  private readonly DEFAULT_PORT = process.env.PORT ? +process.env.PORT : 3028;
  private schema!: GraphQLSchema;
  constructor(schema: GraphQLSchema) {
    if (schema === undefined) {
      throw new Error(
        "Necesitamos un schema de GraphQL para trabajar con APIs GraphQL"
      );
    }
    this.schema = schema;
    if (process.env.NODE_ENV !== "production") {
      const envs = environments;
      console.log(envs);
    }
    this.init();
  }

  private init() {
    this.configExpress();
    this.configApolloServerExpress();
  }

  private configExpress() {
    this.app = express();

    this.app.use(compression());

    this.httpServer = createServer(this.app);
  }

  private async configApolloServerExpress() {
    const apolloServer = new ApolloServer({
      schema: this.schema,
      introspection: true,
      dataSources: () => ({
        genres: new dataSources.Genres(),
        games: new dataSources.Games(),
        platforms: new dataSources.Platforms(),
        tags: new dataSources.Tags(),
      }),
      // Para que podamos tener disponible el playground en producción
      plugins: [
        process.env.NODE_ENV === "production"
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: this.app, cors: true });
  }

  listen(callback: (port: number) => void): void {
    this.httpServer.listen(+this.DEFAULT_PORT, () => {
      callback(+this.DEFAULT_PORT);
    });
  }
}

export default GraphQLServer;
