# Test a Canvas Application

There are two ways to test a Canvas Application

1. Test in the post viewer:
   * If your application does not rely on the social data associated with the post of the application, then the application can be tested in the post viewer without creating a new post by simply posting your application URL.
  
2. Test in a post:
   * If your application relies on the creation of a new post, the recommended practice is to create a portal with view access for your development team and then follow the steps in [Distribute a Canvas Application](./distribute-a-canvas.md) to create a new post with the application embedded in it.
   * You may want to post a portal with limited view permissions so that the application is not seen until it's ready.


## Configuration for Development Servers

Frameworks like NextJS provide a development server that can be used to preview applications during development. The following additional steps are needed to use a development server to preview Canvas Applications:

1. Setup a SSH tunnel to your local development server. For example, the following command can be used to setup a tunnel to a local server running on port 5173 using cloudflared:

```bash
npx cloudflared tunnel --url http://localhost:5173
```

2. Override Content Security Policy for the development server. The [following configuration file](https://github.com/rckprtr/canvas-2048/blob/main/next.config.js) describes the configuration needed for NextJS. A similar approach can be used for other frameworks.

