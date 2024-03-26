import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DSCVR",
  description: "DSCVR Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is DSCVR?', link: '/' },
          { text: 'Social Primitives', link: '/introduction/social-primitives' }
        ]
      },
      {
        text: 'Building',
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
    // disable for now
    //  { icon: 'github', link: 'https://github.com/dscvr-one' },
      { icon: 'twitter', link: 'https://twitter.com/dscvr1' }
    ]
  }
})
