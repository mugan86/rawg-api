"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const schema_graphql_1 = __importDefault(require("./schema.graphql"));
const graphql_tools_1 = require("graphql-tools");
const resolverMap_1 = __importDefault(require("../resolvers/resolverMap"));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_graphql_1.default,
    resolvers: resolverMap_1.default,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});
exports.default = schema;
