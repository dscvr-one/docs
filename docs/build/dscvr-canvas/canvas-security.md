# Canvas Security

To protect users, application developers and the DSCVR platform, Canvases are run in a [sandboxed iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox) with a strict [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). 

In order to enforce a standard CSP for all Canvases, DSCVR routes the initial Canvas traffic through a proxy. This is done by mapping the Canvas's subdomain to a DSCVR-controlled subdomain. The proxy then adds the standard CSP to the response headers.
 
## Customizing the Content Security Policy

Canvases that access resources, scripts, or stylesheets from external URLs need to specify these URLs in the CSP policy. This is necessary to ensure that the Canvas can access the resources it needs while maintaining the security of the DSCVR platform.

DSCVR allows Canvases to provide their own CSP policy for the following CSP directives:

- `script-src`
- `style-src`
- `img-src`
- `font-src`
- `connect-src`
- `media-src`

Please note that values such as `unsafe-inline` and `unsafe-eval` are not allowed in the CSP. However, to support WASM, `wasm-unsafe-eval` is allowed. Inlined scripts and styles can be used via a [nonce](https://content-security-policy.com/nonce/). CSP directives can be modified by the application to specify additional `https` URLs that the application needs to access. DSCVR will merge the CSP sent from your application server with the standard CSP.

DSCVR on a case by case basis can allow exceptions to the above CSP rules.
