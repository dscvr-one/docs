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
      { text: 'Build', link: '/build/' },
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
          { text: 'Open API', items: [
            { text: 'Overview', link: '/build/open-api/overview' }
          ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/DX4CaFph3s' },
      { icon: 'twitter', link: 'https://twitter.com/dscvr1' }
    ]
  }
})
