# DSCVR Canvas (Early Preview)

DSCVR Canvas is a framework for building embedded applications in DSCVR. Canvas applications are just regular web applications that run in a [sandboxed iFrame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox). 

Currently, launching an application is very straightforward. Just create a post with your Application's URL. The Application will be automatically registered, and distributed to DSCVR's users. If you like, you can embed your application in multiple posts across different portals/communities.

::: warning
DSCVR Canvas is currently in early preview. The UX, protocol, and tooling may change as the framework evolves.
:::
 
## Building a Canvas Application

Canvas Applications can be built using any web application framework. Any application that embeds the appropriate meta tags, follows the client to host protocol, and has the appropriate Content Security Policy can be a Canvas Application.

DSCVR's recommendation is to use TypeScript/JavaScript with a UI framework of your choice. DSCVR provides a [Client SDK package](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) that implements the client to host protocol, and will keep it up to date as the protocol changes.

## Quick Start for Existing Applications

If you have an existing TypeScript/JavaScript web application, the following steps can be used to make it a Canvas Application:

1. Add meta tags to your application's HTML:

```html
<meta name="dscvr:canvas:version" content="vNext">
<!-- This is used for previewing an application. -->
<meta name="og:image" content="https://your-application.com/preview-image.png">
```

2. Install the Client SDK package

```bash
npm install @dscvr-one/canvas-client-sdk
```

3. Add application logic to start the handshake with the host:

```typescript
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';

const canvasClient = new CanvasClient();
const response = await canvasClient.ready();

if (response) {
    // The handshake allows access to the user and the content that the application is embedded in.
    const user: CanvasInterface.Handshake.User = response.untrusted.user;
    const content: CanvasInterface.Handshake.Content = response.untrusted.content;
    // ...
}
```

4. Configure the Content Security Policy to include any external URLs that your application needs to access. 
   
   Please refer to the [How Canvas Applications are Secured](#how-canvas-applications-are-secured) section for more information on why this needs to be done. 
   
   The [sample content security policy](https://github.com/dscvr-one/dscvr-canvas/blob/main/examples/jupiter-swap/vercel.json#L8) used in the Jupiter Swap example can serve as a useful reference for specifying your own Content Security Policy.

## Examples

There are a few examples of Canvas Applications that you can use as a reference:

- [Getting Started](https://github.com/dscvr-one/dscvr-canvas/tree/main/examples/getting-started)
- [Jupiter Swap](https://github.com/dscvr-one/dscvr-canvas/tree/main/examples/jupiter-swap)
- [Solana Transactionn](https://github.com/dscvr-one/dscvr-canvas/tree/main/examples/transaction)

## How Canvas Applications are Secured

To protect users, application developers and the DSCVR platform, Canvas Applications are run in a [sandboxed iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox) with a strict [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). 

In order to enforce a standard CSP for all applications, DSCVR routes the application traffic through a proxy. This is done by mapping the application's URL to a DSCVR-controlled subdomain. The proxy then adds the standard CSP to the application's response headers.
 
DSCVR allows applications to provide their own CSP policy to specify additional https URLs for the following CSP directives:

- `script-src`
- `style-src`
- `img-src'`
- `font-src`
- `connect-src`
- `media-src`

DSCVR will merge the CSP sent from your application server with the standard CSP.

Additionally, on a case by case basis, DSCVR may allow additional customization to the CSP policy. Please [reach out](#questions) if you believe your application requires this.

## Limitations of Canvas Applications

The security requirements for Canvas Applications introduce some limitations:

1. Applications cannot launch popups. However, external links can be opened using a method provided in the SDK. This mechanism allows the user to confirm that they want to navigate to the external URL.
2. Applications cannot navigate away from the original URL.
3. All resources must be served over HTTPS.
4. Applications cannot embed other iframes. Exceptions can be made on a case by case basis.

## Questions

If you have any questions or need help, please reach out in the [DSCVR Developer Discord](https://discord.gg/DX4CaFph3s).