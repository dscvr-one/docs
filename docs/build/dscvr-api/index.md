# DSCVR API

DSCVR API provides access to DSCVR's SocialFi graph via a powerful and flexible GraphQL API. The API is designed to be easy to use and to provide all the information needed to build a wide range of applications on top of the DSCVR platform.

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

Currently, DSCVR API does not require authentication. Queries are made with the permissions of a logged out user. In the future authentication and rate-limiting mechanisms might be needed to scale the API.

## Schema Version

While, GraphQL schema is version-less; in practice it's useful to communicate changes with a version when backwards-incompatible changes are made. The current version of the schema is `0.1.0`.

Please note that this version of the DSCVR API should be considered alpha, and is subject to change.

## Example Queries

Any of these queries can be run using `curl`. For example:

```sh
curl 'https://api.dscvr.one/graphql' \
  -H 'accept: application/json, multipart/mixed' \
  -H 'content-type: application/json' \
  --data-raw '{"query":"{ userByName(name: \"PopularDude99\") { id followingCount followerCount dscvrPoints }}"}'
```

### Get a User by Username

The following request looks up a user by user name and returns the user's `followingCount` (the number of users a user is following), `followerCount` (the number of users following a user), `dscvrPoints`, and if the user is following another user with a specific id.

Request:

```graphql
query {
  userByName(name: "PopularDude99") {
    id
    followingCount
    followerCount
    dscvrPoints
    isFollowing(userId:"slrjv-o4wlb-7mjt3-rjegb-psx7i-5ndvk-qkesi-ks3c3-mplfb-ort5m-bqe")
  }
}
```

Response:
```json
{
  "data": {
    "userByName": {
      "id": "33tie-5rizy-elcap-bp5ke-jvrws-c5xib-bxpxi-anf74-aryfg-zlpe5-tqe",
      "followingCount": 93,
      "followerCount": 122,
      "dscvrPoints": "7370953305",
      "isFollowing": true
    }
  }
}
```

### Get a User's Public Wallet Addresses

This request looks up a user by user name and returns the user's public wallet addresses, as well as other information such as the user's `createdAt` timestamp, `dscvrPoints`, and `streak` information.

> Note: Only addresses that the user has chosen to make public to the API in the DSCVR Wallet Settings are returned. The `isPrimary` field indicates whether the wallet is the user's primary wallet. 

> Note: The public wallet addresses are base58 encoded.

> Note: This specific query should be used for illustrative purposes only as this is a test account. However, the query should work in general for any user that has made their wallet addresses public.

Request:

```graphql
query {
  userByName(name: "PopularDude007") {
    followerCount,
    createdAt,
    dscvrPoints
    streak {
      dayCount,
      multiplierCount
    }
    id
    wallets {
      address
      isPrimary
    }
  }
}
```

Response:

```json
{
  "data": {
    "userByName": {
      "followerCount": 60,
      "createdAt": "2022-08-05T17:38:57.162982",
      "dscvrPoints": "5033001091",
      "streak": {
        "dayCount": 3,
        "multiplierCount": 6
      },
      "id": "33tie-5rizy-elcap-bp5ke-jvrws-c5xib-bxpxi-anf74-aryfg-zlpe5-tqe",
      "wallets": [
        {
          "address": "F3MdmVQkRSy56FSKroYawfMk1RJFo42Quzz8VTmFzPVz",
          "isPrimary": true
        }
      ]
    }
  }
}
```

### Get a Content by ID

This request looks up a content by ID and returns the content creator user name and the name of the portal that the content is part of.

> Note: Not all portals make their content available publicly. If the content is not available, the response will be a content with only the id set, and the rest default values.

Request:
```graphql
query {
	content(id: "5") {
    portal {
      name
    }
    contentType
    creator {
      username
    }
  }
}
```

Response:
```json
{
  "data": {
    "content": {
      "portal": {
        "name": "DSCVR"
      },
      "contentType": "POST",
      "creator": {
        "username": "rckprtr"
      }
    }
  }
}
```

### Unpack a Frame Action Message

This request is used to unpack a frame action message. The message is a base64 encoded string that is sent to the frame server when a user interacts with a frame. This query illustrates the flexibility and power of the GraphQL API, where all the information needed by the client can be retrieved via a single query.

> Note: The easiest way to obtain the `messageBytes` is to use the `trustedData.messageBytes` field from the `POST` payload sent to the frame server via the [Frame Validator](https://dscvr.one/dev/frames)

> Note: The frame message is only valid for a certain amount of time, and in the future on-time use messages may also be generated.

Request:
```graphql
query {
  unpackFrameMessage(message:"2dn3o2djb250ZW50pmNhcmdYvERJREwAAXGzAXsiYnV0dG9uSW5kZXgiOjIsInVybCI6Imh0dHBzOi8vZHNjdnItZnJhbWUtY2Fyb3VzZWwudmVyY2VsLmFwcC8iLCJzdGF0ZSI6IiIsInRpbWVzdGFtcCI6MTcxMTUwNjM5NzcyMCwiZHNjdnJJZCI6IjMzdGllLTVyaXp5LWVsY2FwLWJwNWtlLWp2cndzLWM1eGliLWJ4cHhpLWFuZjc0LWFyeWZnLXpscGU1LXRxZSJ9a2NhbmlzdGVyX2lkSgAAAAAAMAAYAQFuaW5ncmVzc19leHBpcnkbF8B+OBRw5cBrbWV0aG9kX25hbWV1bG9nX2ZyYW1lX2ludGVyYWN0aW9ubHJlcXVlc3RfdHlwZWVxdWVyeWZzZW5kZXJYHSjOCLEB4X9URNY2kLt0BDd90AaX/ARwU2VvJ2cCbXNlbmRlcl9wdWJrZXlYLDAqMAUGAytlcAMhAFXE4vDj9tmklK+0CyATzkL2Z12e5FUWcfwt6OGOiFKeanNlbmRlcl9zaWdYQNd4rK8ikytRQQXgUhgWoDIH+2wZqeo/Q6AT903rR0Xej7WZxoGd0uVZiLoOeT5R5GUi5izOeP6DTuzbqKiBNQ8="
  ){ 
  buttonIndex
    user {
      username
    }
    url
  }
}
```

Response

```json
{
  "data": {
    "unpackFrameMessage": {
      "buttonIndex": 2,
      "user": {
        "username": "PopularDude99"
      },
      "url": "https://dscvr-frame-carousel.vercel.app/"
    }
  }
}

```