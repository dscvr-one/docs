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
          { text: 'Social Primitives', link: '/introduction/social-primitives' }
        ]
      },
      {
        text: 'Build',
        items: [
          { text: 'Frames', items: [
            { text: 'Build a Frame', link: '/build/frames/build-a-frame'  },
            { text: 'Frame Concepts', link: '/build/frames/frame-concepts'  },
            { text: 'Frame Specification', link: '/build/frames/frame-specification'  }

          ] },
          { text: 'DSCVR API', link: '/build/dscvr-api/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/DX4CaFph3s' },
      { icon: 'twitter', link: 'https://twitter.com/dscvr1' }
    ]
  }
})
