# Build a Canvas Application

Any Web Application can be easily made into a Canvas Application with just the inclusion of two meta tags:

```html
<meta name="dscvr:canvas:version" content="vNext">
<!-- Open Graph Image for previewing the application -->
<meta name="og:image" content="https://your-application.com/preview-image.png">
```

To protect both DSCVR's users and Canvas Application developers, DSCVR runs Canvas Applications within a sandbox. This is explained more in the [Canvas Application Security](#canvas-application-security) section. Some applications may need to define additional [Content Security Policy directives](#canvas-content-security-policy-directives) to conform with DSCVR's sandbox.

Canvas Applications can use the [Client SDK package](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) to interact with the DSCVR frontend.

Canvas Applications can use the [DSCVR API](../dscvr-api/index.md) to access DSCVR's rich social graph data. This data provides additional information about the user such as their follower graph, or the context that the app is embedded in like the portal. One use-case of DSCVR API is to perform conditional actions, for example when a user likes a post, or has a certain number of followers, etc.

The [Design guidelines](#canvas-application-styling-guidelines) section describes both the styling recommendations to ensure canvas applications look good as well as some of the design considerations when building Canvas Applications.

Checkout some of the [examples](#canvas-examples) to help jump-start your Canvas Application!


## Previewing Applications During Development and Testing

The use of development previews and hot reloading is very common during web application development. Some additional steps are required to preview Canvas Applications during development:

1. Setup a SSH tunnel to your local development server. The following command, for example can be used to setup a tunnel to a local server running on port 5173 using cloudflared:

```bash
npx cloudflared tunnel --url http://localhost:5173
```

2. Configure the development server to use a Content Security Policy that conforms with the Canvas Sandbox
