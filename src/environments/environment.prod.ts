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
      navs: [],
    },
  ],
};
