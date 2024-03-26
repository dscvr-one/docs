# Frame Concepts

DSCVR Frames are a new way to create your own integrated experiences within a post on DSCVR. 

Conceptually, a frame is a set of meta tags that conform to the OpenGraph standard. DSCVR uses these tags to render the frame in a post. A frame is served by a frame server, which is a web server that responds to requests with the frame content.

## Frame Server Interaction

When a post is first shown to the user, the initial frame request sent to the frame server is a `HTTP GET` request. The frame server should respond to this request with static content that can be cached.

> Note: If you do not want the initial frame response to be cached, which is useful for initial development, please be sure to set the `Cache-Control` header to `no-cache`.

When a user interacts with the frame, such as clicking a button, the frame server will receive a HTTP POST request with a [message payload](./frame-specification.md). The frame server should respond to this request with updated content based on the message payload.

The message payload contains a signature from the user, which can be verified using the [Open API](../open-api/index.md).

## Frames Adapter

DSCVR provides a [frames-adapter package](https://github.com/dscvr-one/frames-adapter) in TypeScript that can be used to verify that the request sent to the frame server is from a DSCVR client, and to verify that the request was signed by a DSCVR user.

## Frame Specification

DSCVR supports the [Open Frame Specification](https://github.com/open-frames/standard/blob/v0.0.1/README.md), such that developers can build frames that are interoperable with other platforms. DSCVR also supports additional tags and fields that are specific to the DSCVR platform; these are detailed in the [DSCVR Frame Specification](./frame-specification.md).
