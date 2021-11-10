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
        reference: '',
        faq: '',
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
        reference: '',
        faq: '',
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
        reference: '',
        faq: '',
      },
      navs: [
        {
          label: 'Webの基本',
          url: '/web-intro',
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
        reference: '',
        faq: '',
      },
      navs: [
        {
          label: 'モダンなWeb技術',
          url: '/modern-web',
          icon: 'article',
        },
      ],
    },
    {
      title: '本ページを支える技術',
      description: 'Developer Portalを支える技術を紹介します。',
      url: '/about',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: '',
        faq: '',
      },
      navs: [
        {
          label: '技術構成',
          url: '/about',
          icon: 'article',
        },
      ],
    },
  ],
};
