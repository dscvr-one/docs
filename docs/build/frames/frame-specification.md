# Frame Specification

DSCVR supports the [Open Frame Specification v0.0.2](https://github.com/open-frames/standard/blob/main/README.md) for interoperability with other platforms. DSCVR also supports additional tags and fields that are specific to the DSCVR platform. This document describes the comprehensive set of tags and fields that are supported by DSCVR.

There are three parts to this specification: 

- The set of HTML Meta Tag Properties that DSCVR supports.
- The JSON payload that DSCVR sends to the frame server.
- HTTP codes, and other expectations of the frame server.

## HTML Meta Tag Properties

### Required Properties

| Property | Description |
| --- | --- |
| `of:version`  | The version label of the Open Frames spec. Currently the only supported version is `vNext` |
| `of:accepts:dscvr` | This property should be present to indicate compatability with DSCVR. The content should be set to `0.1.0`. <br/><br/>Please note that during an initial launch period, the DSCVR client will render frames even if this property is not present.  |
| `of:image` | An image which should have an aspect ratio of `1.91:1` or `1:1`.  |
| `og:image` | An image which should have an aspect ratio of `1.91:1`. Fallback for clients that do not support frames. |

### Optional properties

| Property | Description |
| --- | --- |
| `of:button:$idx` | 256 byte string containing the user-visible label for button at index `$idx`. Buttons are 1-indexed. Maximum 4 buttons per Frame. `$idx` values must be rendered in an unbroken sequence.   |
| `of:button:$idx:action` | Valid options are `post`, `post_redirect`, and `link`. Default: `post` |
| `of:post_url` | The URL where the POST payload will be sent. Must be valid and start with `http://` or `https://` . Maximum 256 bytes. |
| `of:input:text` | If this property is present, a text field should be added to the Frame. The contents of this field will be shown to the user as a label on the text field. Maximum 32 bytes. |
| `of:image:aspect_ratio` | The aspect ratio of the image specified in the `of:image` field. Allowed values are `1.91:1` and `1:1`. Default: `1.91:1` |
| `of:image:alt` | Alt text associated with the image for accessibility |
| `of:state` | A state serialized to a string (for example via JSON.stringify()). Maximum 4096 bytes. Will be ignored if included on the initial frame |

### Compatability with Other Frames Platforms

During the initial launch, DSCVR will also accept properties with the `of:` prefix instead of the `fc:` prefix. This is to ensure that frames built for other platforms and existing frameworks can be easily ported to DSCVR.

### Example

The following is a valid example of a frame that includes all the required properties:

```html
<meta property="of:version" content="vNext">
<meta property="of:accepts:dscvr" content="0.1.0">
<meta property="of:post_url" content="https://dscvr-frame-media.vercel.app/frames?p=%2F&amp;s=%7B%7D&amp;r=%7B%7D">
<meta property="of:input:text" content="Paste your media url">
<meta property="of:button:1" content="GIF">
<meta property="of:button:1:action" content="post">
<meta property="of:button:2" content="SVG">
<meta property="of:button:2:action" content="post">
<meta property="of:button:3" content="SVG 2">
<meta property="of:button:3:action" content="post">
<meta property="of:button:4" content="Custom">
<meta property="of:button:4:action" content="post">
<meta property="of:image" content="https://dscvr-frame-media.vercel.app/png-sample.png">
```

## JSON Payload Properties

The JSON payload that DSCVR sends to the frame server is a JSON object that contains the following properties:

```ts
type FramesPost = {
  clientProtocol: "dscvr@0.1.0";
  untrustedData: {
    url: string; // The URL of the Frame that was clicked. May be different from the URL that the data was posted to.
    timestamp: number; // Unix timestamp in milliseconds
    buttonIndex: number; // The button that was clicked
    inputText?: string; // Input text for the Frame's text input, if present. Undefined if no text input field is present
    state?: string; // State that was passed from the frame, passed back to the frame, serialized to a string. Max 4kB.
    contentId?: string; // The content id of the post where the frame was clicked. If the content id is not present, then the frame was clicked in a post preview.
    dscvrId: string, // The id of the caller who clicked the frame
  };
  trustedData: {
    messageBytes: string; // Signed data that can be used to verify the authenticity of the request
  };
};
```

### Differences from Open Frames Specification 0.0.2

- Adds `contentId`
- Adds `dscvrId`
- Use `timestamp` instead of the `unixTimestamp`

## Frame Server Expectations

- Respond to any POST request within 5 seconds.
- Respond to a `post` button click with a `200 OK` and another frame. `3xx` redirects that ultimately yield a `200` and a frame will be followed.
- Respond to a `post_redirect` button click with a `302 OK` and a `Location` header.
- Any returned URLs should be `http` or `https`.
