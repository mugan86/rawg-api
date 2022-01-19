const EasyGraphQLTester = require("easygraphql-tester");
const { it } = require("mocha");

const apiSchema = require("./../../mocks/api-schema");

// const tester =
describe("Test Schema GraphQL - Query - genre.graphql", () => {
  let tester;
  before(function () {
    tester = new EasyGraphQLTester(apiSchema);
  });
  it("'genres' válida", () => {
    const query = `{
        genres {
          status
          message
          count
          next
          previous
          results {
            id
            name
            games_count
            games {
              id
              name
            }
          }
        }
      }`;
    tester.test(true, query, {});
  });
  it("'genres' inválida", () => {
    const query = `
    {
        genres {
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
  it("'genre' - válida", () => {
    const query = `
    query getDetails($id: String!) {
      genre(id: $id) {
        status
        message
        genre {
          id
          name
          slug
        }
      }
    }`;
    tester.test(true, query, {id: "4"});
  });

  it("'genre' - inválida - Sin Query Variables", () => {
    const query = `
    query getDetails($id: ID!) {
      genre(id: $id) {
        status
        message
        genre {
          id
          name
          slug
          added
        }
      }
    }`;
    tester.test(false, query, {});
  });
  it("'genre' - inválida - Propiedades resultado incorrectos", () => {
    const query = `
    query getDetails($id: ID!) {
      genre(id: $id) {
        status
        message
        page
        itemsPage
        count
        totalPages
        next
        previous
        genre {
          id
          name
          slug
          added
        }
      }
    }`;
    tester.test(false, query, {id: 4});
  });
});
