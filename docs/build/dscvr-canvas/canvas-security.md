
## Canvas Security

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

4. Configure the Content Security Policy to include any external URLs that your application needs to access. 
   
   Please refer to the [Security](#security) section for more information on why this needs to be done. 
   
   The [sample content security policy](https://github.com/dscvr-one/dscvr-canvas/blob/main/examples/jupiter-swap/vercel.json#L8) used in the Jupiter Swap example can serve as a useful reference for specifying your own Content Security Policy.
