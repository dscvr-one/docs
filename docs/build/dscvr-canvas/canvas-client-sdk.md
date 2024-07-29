# Canvas Client SDK

The [Client SDK package](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) can be used to interact with the DSCVR frontend. Some features provided by the SDK are:

- Accessing user and post information
- Performing transactions on the Solana blockchain
- Opening external links in a safe way

To use the SDK:

1. Install the Client SDK package

```bash
npm install @dscvr-one/canvas-client-sdk
```

2. Add application logic to start the handshake with the host:

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

3. Please see the [SDK documentation](https://www.npmjs.com/package/@dscvr-one/canvas-client-sdk) and examples for more information on how to use the available functionality.

