export const environment = {
  production: true,

  // ドキュメント一覧
  documents: [
    {
      title: 'Developer Portal',
      description: 'Developer Portalは、立命館学生がWeb技術を学ぶためのポータルサイトです。',
      url: '/dashboard',
      version: 'v1.0',
      display: false,
      externalLink: {
        reference: 'https://github.com/averak/media-project-exercise1',
        faq: 'https://github.com/averak/media-project-exercise1',
      },
      navs: [],
    },
    {
      title: 'Webの歴史',
      description:
        'Webの歴史について解説します。Webが生まれた経緯や技術的背景について学んで行きましょう。',
      url: '/web-history',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: 'https://github.com/averak/media-project-exercise1',
        faq: 'https://github.com/averak/media-project-exercise1',
      },
      navs: [
        {
          label: 'Webの歴史',
          url: '/web-history',
          icon: 'article',
        },
      ],
    },
    {
      title: 'Webの基本',
      description: '初心者向けに、Webとは何なのか、何を解決できるのか紹介します。',
      url: '/web-intro',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: 'https://github.com/averak/media-project-exercise1',
        faq: 'https://github.com/averak/media-project-exercise1',
      },
      navs: [
        {
          label: 'Webの基本',
          url: '/web-intro',
          icon: 'article',
        },
        {
          label: 'HTTPとは',
          url: '/web-intro/http',
          icon: 'article',
        },
        {
          label: 'URIとは',
          url: '/web-intro/uri',
          icon: 'article',
        },
        {
          label: 'HTMLとは',
          url: '/web-intro/html',
          icon: 'article',
        },
      ],
    },
    {
      title: 'モダンなWeb技術',
      description:
        'Webは進化が著しい技術分野です。そこで、ここ数年の最新トレンドについて紹介していきます。',
      url: '/modern-web',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: 'https://github.com/averak/media-project-exercise1',
        faq: 'https://github.com/averak/media-project-exercise1',
      },
      navs: [
        {
          label: 'モダンなWeb技術',
          url: '/modern-web',
          icon: 'article',
        },
        {
          label: 'UIライブラリ',
          url: '/modern-web/ui-library',
          icon: 'article',
        },
      ],
    },
    {
      title: '本ページについて',
      description: 'Developer Portalの役割と、本ページを支える技術を紹介します。',
      url: '/about',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: 'https://github.com/averak/media-project-exercise1',
        faq: 'https://github.com/averak/media-project-exercise1',
      },
      navs: [
        {
          label: '本ページについて',
          url: '/about',
          icon: 'article',
        },
        {
          label: '技術構成',
          url: '/about/tech',
          icon: 'article',
        },
      ],
    },
  ],
};
