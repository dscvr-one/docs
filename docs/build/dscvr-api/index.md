# DSCVR API

Access DSCVR's SocialFi graph via a [GraphQL API](https://graphql.org/learn/).

## Explore the Schema

- [GraphQL Playground](https://api.dscvr.one/graphql)
- <a href="/build/dscvr-api/schema.docs.graphql" download="dscvr-api.schema.docs.graphql">Download the Latest Schema</a>

## Learning GraphQL

If you're not already familiar with GraphQL please check out the [GraphQL Introduction](https://graphql.org/learn/)

### GraphQL Clients

GraphQL requests can be performed using any HTTP client. Most of the examples in this document specify simple `curl` commands that can be run on the command-line. However, a GraphQL client library can make working with GraphQL APIs much easier by facilitating type-checking and autocompletion in an IDE.

The DSCVR team uses [gql.tada](https://github.com/0no-co/gql.tada), which facilitates working with TypeScript and GraphQL. However, there are many other libraries available for different languages and frameworks, and you're welcome to use the language and framework of your choice.

#### GraphQL Client Caching

We recommend disabling GraphQL client caching, at least during initial development, so that you can always get the latest data. This is especially crucial when polling for new data in response to user events; as GraphQL clients typically cache results for queries, so you may not see the latest data if caching is enabled.

## Authentication

Currently, DSCVR API is completely open and does not require authentication. Queries are made with the permissions of a logged out user. In the future authentication and rate-limiting might be implementation.

## Schema Version

While, GraphQL schema is versionless; in practice it's useful to communicate changes with a version when backwards-incompatible changes are made. The current version of the schema is `0.1.0`.

## Example Queries

Any of these queries can be run using `curl`. For example:

```sh
curl 'https://api.dscvr.one/graphql' \
  -H 'accept: application/json, multipart/mixed' \
  -H 'content-type: application/json' \
  --data-raw '{"query":"{ userByName(name: \"PopularDude99\") { id followingCount followerCount dscvrPoints }}"}'
```

### Get a User by Username

```graphql
{
  userByName(name: "PopularDude99") {
    id
    followingCount
    followerCount
    dscvrPoints
  }
}
```