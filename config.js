const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://agorawebsdktutorialenusmain.gtsb.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    title:
      "<a href='https://agorawebsdktutorialenusmain.gtsb.io//'>Agora RTC Web SDK Tutorial</a>",
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/video-capture-render',
      '/audio-capture-render',
      '/create-connection',
      '/send-receive-media',

    ],
    collapsedNav: [
    '/introduction', // add trailing slash if enabled above
     ],
    links: [{ text: 'Agora Official Site', link: 'https://agora.io' }, { text: 'Agora Documentation Center', link: 'https://docs.agora.io' }, { text: 'Web SDK Sample Project', link: 'https://github.com/AgoraIO/API-Examples-Web' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'RTC Web SDK Training | Agora',
    description: 'Documentation built with mdx. Powering docs.agora.io ',
    ogImage: null,
    docsLocation: 'https://github.com/yamasite/agora-web-sdk-tutorial-en-us/tree/master/content',
    favicon: 'https://web-cdn.agora.io/doc-center/image/agora-logo.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
      ],
    },
  },
};

module.exports = config;
