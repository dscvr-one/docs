# Build a Canvas

Any Web Application can be easily made into a Canvas with just a few steps:

1. Add HTML meta tags:

```html
<!-- Indicates that the application is a Canvas -->
<meta name="dscvr:canvas:version" content="vNext">
<!-- Open Graph Image for previewing the Canvas -->
<meta name="og:image" content="https://my-canvas.com/preview-image.png">
```

2. Setup a [Content Security Policy](./canvas-security.md#customizing-the-content-security-policy) if needed. A content security policy is necessary if the application accesses resources, scripts, or stylesheets from external URLs.

3. (Optional) Use the [Canvas Client SDK](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) to interact with the DSCVR frontend, and to get initial information about the user and the post that the Canvas is embedded in.
   
4. (Optional) Use [DSCVR API](../dscvr-api/index.md) to access DSCVR's social graph data. DSCVR API provides additional information about the user such as their follower graph, or the context that the app is embedded in like the portal. One use-case of DSCVR API is to perform conditional actions, for example when a user likes a post, or has a certain number of followers, etc.

5. (Optional) Follow the [Design Guidelines](./canvas-design-guidelines.md) to ensure your Canvas looks good.

## Testing

There are two ways to test a Canvas:

1. In the Post Viewer: 
   * Can be used if the Canvas does not query the post that it's embedded in. In this case, the Canvas can be tested in the post viewer without creating a new post by simply posting the URL.
  
2. In a post:
   * If your Canvas queries the post that it's embedded in (for example to check if the user liked the post), then the recommended practice is to create a test portal with view access for your development team and then follow the steps in [Distribute a Canvas](./distribute-a-canvas.md) to create a new post with the Canvas embedded in it.
   * You may want to post a portal with limited view permissions so that the Canvas is not seen until it's ready.


### Configuration for Development Servers

Frameworks like NextJS provide a development server that can be used to preview applications during development. The following additional steps are needed to use a development server to preview Canvas:

1. Setup a SSH tunnel to your local development server. For example, the following command can be used to setup a tunnel to a local server running on port 5173 using cloudflared:

```bash
npx cloudflared tunnel --url http://localhost:5173
```

2. Override Content Security Policy for the development server. The [following configuration file](https://github.com/rckprtr/canvas-2048/blob/main/next.config.js) describes the configuration needed for NextJS. A similar approach can be used for other frameworks.

