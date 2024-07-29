import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DSCVR",
  description: "DSCVR Documentation",
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Build', link: '/build/frames/build-a-frame' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is DSCVR?', link: '/' },
          { text: 'Social Primitives', link: '/introduction/social-primitives' },
        ]
      },
      {
        text: 'Build',
        items: [
          { text: 'DSCVR Canvas (Early Preview)', link: '/build/dscvr-canvas/',
            items: [
              { text: 'Build a Canvas', link: '/build/dscvr-canvas/build-a-canvas' },
              { text: 'Canvas Client SDK', link: '/build/dscvr-canvas/canvas-client-sdk' },
              { text: 'Canvas Examples', link: '/build/dscvr-canvas/canvas-examples' },
              { text: 'Canvas Design Guidelines', link: '/build/dscvr-canvas/canvas-design-guidelines' },
              { text: 'Canvas Security', link: '/build/dscvr-canvas/canvas-security' },
            ]
          },
          { text: 'DSCVR API', link: '/build/dscvr-api/' },
          { text: 'Frames (Legacy)', items: [
            { text: 'Build a Frame', link: '/build/frames/build-a-frame'  },
            { text: 'Frame Concepts', link: '/build/frames/frame-concepts'  },
            { text: 'Frame Specification', link: '/build/frames/frame-specification'  },
            { text: 'Post a Frame', link: '/build/frames/post-a-frame' }

          ], link: '/build/frames/build-a-frame'  },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/DX4CaFph3s' },
      { icon: 'twitter', link: 'https://twitter.com/dscvr1' }
    ]
  }
})
