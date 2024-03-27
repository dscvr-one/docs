# Frame Concepts

DSCVR Frames are a new way to create your own integrated experiences within a post on DSCVR. 

Conceptually, a frame is a set of meta tags that build on top of the OpenGraph standard. DSCVR uses these tags to render the frame in a post. A frame is served by a frame server, which is a web server that responds to requests with the frame content.

## Frame Interactions

When a post is first shown to the user, the initial frame request sent to the frame server is a `HTTP GET` request. The frame server should respond to this request with static content that can be cached.

> Note: If you do not want the initial frame response to be cached, which is useful for initial development, please be sure to set the `Cache-Control` header to `no-cache`.

When a user interacts with the frame, such as clicking a button, the frame server will receive a HTTP POST request with a [message payload as defined in the frame specification](./frame-specification.md#json-payload-properties). The frame server should respond to this request with [updated frame](./frame-specification.md#html-meta-tag-properties) based on the message payload.

The message payload contains a signature from the user, which can be verified using the [DSCVR API](../dscvr-api/index.md).

## Frame Distribution

When a user interacts with a frame using a DSCVR client, unique interactions with the frame are verified and logged by DSCVR. Unique interactions influence the user's social graph, which guide the feed algorithms that distribute the frame. While processing a frame interaction, DSCVR verifies the user signature and that the frame is contained in a valid DSCVR post. Please note that to use this capability effectively, the frame URL must remain the same. If the frame appears in several posts, interactions across all the posts will be aggregated.

## Frames Adapter

DSCVR provides a [frames-adapter package](https://github.com/dscvr-one/frames-adapter) in TypeScript that can be used to verify that the request sent to the frame server is from a DSCVR client, and to verify that the request was signed by a DSCVR user.

## Frame Specification

Please refer to the [DSCVR Frame Specification](./frame-specification.md) for a detailed description of the HTML Meta Tags and JSON payloads that are used to build a frame.
