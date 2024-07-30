# Testing a Canvas Application

There are two ways to test a Canvas Application

1. Test in the post viewer:
   * If your application does not rely on the social data associated with the post of the application, then the application can be tested in the post viewer without creating a new post.
  
2. Test in a post:
   * If your application relies on the creation of a new post, the recommended practice is to create a portal with view access for your development team and then follow the steps in [Distribute a Canvas Application](./distribute-a-canvas.md) to create a new post with the application embedded in it.


## Previewing Applications During Development and Testing

The use of development previews and hot reloading is very common during web application development. The following steps can be used to preview Canvas Applications during development:

Setup a SSH tunnel to your local development server. The following command, for example can be used to setup a tunnel to a local server running on port 5173 using cloudflared:

```bash
npx cloudflared tunnel --url http://localhost:5173
```

## Override Development Server Content Security Policy

In order to test the application using the above methods, the CSP of the development server needs to be configured.

The [following configuration file](https://github.com/rckprtr/canvas-2048/blob/main/next.config.js) describes the configuration needed for the popular NextJS framework to preview Canvas Appliations.
