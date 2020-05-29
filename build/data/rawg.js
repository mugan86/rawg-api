"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAWG = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class RAWG extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.rawg.io/api/";
    }
}
exports.RAWG = RAWG;
