# Design Guidelines

The guidelines are provided to ensure that the application looks good when embedded in DSCVR and also other considerations to keep in mind when designing Canvas Applications.

## Styling Guidelines

- Applications need to specify a background color. The default background is #0C0F14.
- The aspect  aspect ratio is taken from the preview image. If the preview image is not not present then 1.91/1 is used for the aspect ratio.
- Canvas width is 100% of the container, but height can change with the `resize` request
- Scroll is handled in the host after 1200px, so the canvas be mindful if canvas shows other scrolls

## Other Considerations

- Applications cannot launch popups. However, external links can be opened using a method provided in the SDK. This mechanism allows the user to confirm that they want to navigate to the external URL.
- Applications cannot navigate away from the original URL.
- All resources must be served over HTTPS.
- Applications cannot embed other iframes.