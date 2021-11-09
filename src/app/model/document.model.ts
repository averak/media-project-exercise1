export type DocumentSideNavModel = {
  label: string;
  url: string;
  icon: string;
};

export type DocumentModel = {
  title: string;
  description: string;
  url: string;
  version: string;
  display: boolean;

  // 外部リンク
  externalLink: {
    reference: string;
    faq: string;
  };

  // サイドナビ
  navs: DocumentSideNavModel[];
};
