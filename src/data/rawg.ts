import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class RAWG extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.rawg.io/api/";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("key", process.env.API_KEY || "");
  }
}
