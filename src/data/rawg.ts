import { RESTDataSource } from 'apollo-datasource-rest';

export class RAWG extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.rawg.io/api/';
    }
}