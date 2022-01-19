const EasyGraphQLTester = require("easygraphql-tester");
const { it } = require("mocha");

const apiSchema = require("./../../mocks/api-schema");

// const tester =
describe("Test Schema GraphQL - Query - game.graphql", () => {
  let tester;
  before(function () {
    tester = new EasyGraphQLTester(apiSchema);
  });
  it("'games' válida - Sin usar Query Variables", () => {
    const query = `
    {
        games {
          status
          message
          page
          itemsPage
          count
          totalPages
          next
          previous
          results {
            id
            name
            slug
            added
          }
        }
      }
    `;
    tester.test(true, query, {});
  });
  it("'games' válida - Usando Query Variables - Paginación - Página", () => {
    const query = `
    query gamesList($page: Int){
        games (page: $page){
          status
          message
          page
          itemsPage
          count
          totalPages
          next
          previous
          results {
            id
            name
            slug
            added
          }
        }
      }`;
    tester.test(true, query, { page: 5 });
  });
  it("'games' válida - Usando Query Variables - Paginación - Página, Items Página", () => {
    const query = `
          query gamesList($page: Int, $itemsPage: Int){
              games(page: $page, itemsPage: $itemsPage) {
                status
                message
                page
                itemsPage
                count
                totalPages
                next
                previous
                results {
                  id
                  name
                  slug
                  added
                }
              }
            }`;
    tester.test(true, query, { page: 2, itemsPage: 4 });
  });
  it("'games' inválida", () => {
    const query = `
    {
        games {
          status
          message
          page
          itemsPage
          count
          totalPages
          next
          previous
          id
          name
          slug
          added
        }
      }
          `;
    tester.test(false, query, {});
  });
  it("'game' - válida", () => {
    const query = `
    query getDetails($id: ID!) {
      game(id: $id) {
        status
        message
        game {
          id
          name
          slug
          added
        }
      }
    }`;
    tester.test(true, query, {id: 3498});
    tester.test(true, query, {id: "3498"});
  });

  it("'game' - inválida - Sin Query Variables", () => {
    const query = `
    query getDetails($id: ID!) {
      game(id: $id) {
        status
        message
        game {
          id
          name
          slug
          added
        }
      }
    }`;
    tester.test(false, query, {});
  });
  it("'game' - inválida - Propiedades resultado incorrectos", () => {
    const query = `
    query getDetails($id: ID!) {
      game(id: $id) {
        status
        message
        page
        itemsPage
        count
        totalPages
        next
        previous
        game {
          id
          name
          slug
          added
        }
      }
    }`;
    tester.test(false, query, {id: 3498});
  });
});
