import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DSCVR",
  description: "DSCVR Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/what-is-dscvr' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is DSCVR?', link: '/introduction/what-is-dscvr' },
          { text: 'Social Primitives', link: '/introduction/social-primitives' },
        ]
      },
      {
        text: 'Building on DSCVR',
        items: [
          { text: 'Introduction', link: '/building/introduction' },
          { text: 'Frames', items: [
            { text: 'Overview', link: '/building/frames/overview'  },
            { text: 'Build your first frame', link: '/building/frames/first-frame'  }
          ] },
          { text: 'GraphQL API', items: [
            { text: 'Overview', link: '/building/graphql/overview' },
            { text: 'Reference', link: '/building/graphql/reference' },
          ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dscvr-one' },
      { icon: 'twitter', link: 'https://twitter.com/dscvr1' }
    ]
  }
})
