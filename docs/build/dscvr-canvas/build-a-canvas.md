# Build a Canvas Application

Any Web Application can be easily made into a Canvas Application with just the inclusion of two meta tags:

```html
<meta name="dscvr:canvas:version" content="vNext">
<!-- Open Graph Image for previewing the application -->
<meta name="og:image" content="https://your-application.com/preview-image.png">
```

To protect both DSCVR's users and Canvas Application developers, DSCVR runs Canvas Applications within a sandbox. This is explained more in the [Canvas Application Security](./canvas-security.md). Some applications may need to define additional [Content Security Policy directives](./canvas-security.md#customizing-the-content-security-policy) to conform with DSCVR's sandbox.

Canvas Applications can use the [Client SDK package](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) to interact with the DSCVR frontend.

Canvas Applications can use the [DSCVR API](../dscvr-api/index.md) to access DSCVR's rich social graph data. This data provides additional information about the user such as their follower graph, or the context that the app is embedded in like the portal. One use-case of DSCVR API is to perform conditional actions, for example when a user likes a post, or has a certain number of followers, etc.

The [Design guidelines](#canvas-application-styling-guidelines) section describes both the styling recommendations to ensure canvas applications look good as well as some of the design considerations when building Canvas Applications.

Checkout some of the [examples](#canvas-examples) to help jump-start your Canvas Application!

To test a Canvas Application please see [Testing a Canvas Appliction](./testing-a-canvas.md). When you're ready to distribute your Canvas Application, check out the [Distribute a Canvas Application](./distribute-a-canvas.md) page.
