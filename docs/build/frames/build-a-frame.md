# Build a Frame

This guide will walk you through the process of building a Frame on DSCVR.

## Getting Started

To build a frame, you'll first need an understanding of the [Frame Concepts](./frame-concepts.md).

Aditionally, while frames can be implemented in any programming language and webserver framework, for the purposes of this guide you will need an understanding of Typescript. 

## Setup the "Frame Starter" Project

The easiest way to get started with building a frame is to use the "Frame Starter" project. This project is a simple Typescript project that includes all the necessary boilerplate code to get you started building a frame.

To setup the "Frame Starter" project, run the following commands:

```sh
# Add the dscvr-one registry 
npm config set "@dscvr-one:registry=https://npm.pkg.github.com/"
# Create the project
npm create @dscvr-one/frame-starter@latest frame-starter
```

This will create a called `frame-starter` in the directory that you run the command.

## Run the Project Locally

To run the project locally, navigate to the project directory and run the following commands:

```sh
pnpm dev
```

This will start the development server on port 3000.

## Create an Externally Accessible URL

In order the test the frame, you'll need to open a SSH tunnel from the development server to create an externally accessible URL. We use localtunnel for this:

```sh
npx localtunnel --port 3000
```

## Open the Frame in the Frame Validator

DSCVR provides a [Frame Validator](https://www.dscvr.one/dev/frames) to help you identify any issues with your frame before deploying it to the DSCVR platform. You will need a [DSCVR account](https://www.dscvr.one).

Once you've opened the Frame Validator, enter the URL and click the button. If everything works, the first page of the frame will successfully load!

In the validator, you can see the JSON message that's passed to your frame server, as well as the frame tags returned by the server, in addition to other useful information such as timing.

## Next Steps

The frame starter project and other examples provided by DSCVR are [available on GitHub](https://github.com/dscvr-one/frames-examples) and are a great way to get started building a frame. 

One of the learning curves of building a frame is rendering HTML to an image. All the examples provided by DSCVR use the [Satori library](https://github.com/vercel/satori) for this. However, Satori supports [only a subset of HTML and CSS](https://github.com/vercel/satori?tab=readme-ov-file#html-elements). Understanding how best to use Satori is crucial to building a frame with HTML that renders correctly. As an alternative to HTML, many frame developers use GIFs or images creatively for a rich user experience.

Additionally, the [DSCVR API](https://www.dscvr.one/dev/api) provides rich data to help you build a frame that interacts with the DSCVR platform.

You can deploy the frame using [Vercel](https://vercel.com/), [Cloudflare Workers](https://www.cloudflare.com/), or any other platform of your choice. 

That's it! You've successfully built and tested a frame on DSCVR. If you have any questions, please let us know in the [DSCVR Developer Discord](https://discord.gg/DX4CaFph3s).
