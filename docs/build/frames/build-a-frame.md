# Build a Frame

This guide will walk you through the process of building a Frame on DSCVR.

## Getting Started

To build a frame, you'll first need an understanding of the [Frame Concepts](./frame-concepts.md).

Additionally, while frames can be implemented in any programming language and web server framework, for the purposes of this guide you will need to have an understanding of Typescript. 

## Setup the "Frame Starter" Project

The easiest way to get started with building a frame is to use the "Frame Starter" project. This project is a simple Typescript project that includes all the necessary boilerplate code to get you started building a frame.

You'll need the following tools to get started:

- node >= 20
- [pnpm](https://pnpm.io/installation)

To setup the "Frame Starter" project, run the following commands:

```sh
npm create @dscvr-one/frame-starter@latest frame-starter
```

This will create a folder called `frame-starter` in the directory that you run the command.

## Run the Project Locally

To run the project locally, navigate to the project directory and run the following commands:

```sh
pnpm dev
```

This will start the development server on port 3000.

## Create an Externally Accessible URL

In order the test the frame, you'll need to open a SSH tunnel from the development server to create an externally accessible URL. We use [localtunnel](https://theboroer.github.io/localtunnel-www/) for this:

```sh
npx localtunnel --port 3000
```

## Open the Frame in the Frame Validator

DSCVR provides a [Frame Validator](https://www.dscvr.one/dev/frames) to help you identify any issues with your frame before deploying it to the DSCVR platform. You will need a [DSCVR account](https://www.dscvr.one) to use the Frame Validator.

Once you've opened the Frame Validator, enter the URL and click the button. If everything works, the first page of the frame will successfully load!

In the validator, you can see any detected frame tags returned by your server, as well as the JSON message that's passed to your frame server for any button interactions. Other useful information such as timing is also presented.

## Deploying a Frame

You can deploy the frame using [Vercel](https://vercel.com/), [Cloudflare Workers](https://www.cloudflare.com/), or any other platform of your choice. 

## Posting a Frame

Once your frame is deployed, you can [post it on DSCVR](../frames/post-a-frame.md). You can post the same frame in several posts for increased visibility or several frames in a single post to create a frame gallery.

## Next Steps

The frame starter project and other examples provided by DSCVR are [available on GitHub](https://github.com/dscvr-one/frames-examples) and are a great way to get started building a frame. 

One of the learning curves of building a frame is rendering HTML to an image. All the examples provided by DSCVR use [frames.js](https://framesjs.org) for rendering the frame, which internally uses the [Satori library](https://github.com/vercel/satori). However, Satori supports [only a subset of HTML and CSS](https://github.com/vercel/satori?tab=readme-ov-file#html-elements). Understanding how best to use Satori is crucial to building a frame with HTML that renders correctly. As an alternative to HTML, many frame developers use GIFs or images creatively for a rich user experience.

Additionally, the [DSCVR API](../dscvr-api/index.md) provides rich data to help you build a frame that interacts with the DSCVR platform.

That's it! You've successfully built and tested a frame on DSCVR. If you have any questions, please reach out in the [DSCVR Developer Discord](https://discord.gg/DX4CaFph3s).
