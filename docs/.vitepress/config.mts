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
          { text: 'Introduction', link: '/build/introduction' },
          { text: 'Frames', items: [
            { text: 'Overview', link: '/build/frames/overview'  },
            { text: 'Build your first frame', link: '/build/frames/first-frame'  }
          ] },
          { text: 'Open API', items: [
            { text: 'Overview', link: '/build/open-api/overview' },
            { text: 'Reference', link: '/build/open-api/reference' },
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
