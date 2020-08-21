/**
 * @file insertMetaTags
 * Function to insert meta information into the head of a page
 */

interface MetaInfo {
  title: string;
  metaTags?: {
    key: string;
  }[];
}

/**
 * Update the page title
 */
const updateTitle = (page: MetaInfo): void => {
  if (page.title != null) {
    document.title = page.title;
  }
};

/**
 * Insert meta tags into the head of the page
 */
const insertMetaTags = (metaInfo: MetaInfo): void => {
  if (metaInfo.metaTags != null) {
    const { metaTags } = metaInfo;

    metaTags
      .map((tag: Record<string, string>) => {
        const el = document.createElement('meta');

        Object.keys(tag).forEach((key) => {
          el.setAttribute(key, tag[key]);
        });

        return el;
      })
      .forEach((el: HTMLMetaElement) => document.head.appendChild(el));
  }
};

export { updateTitle, insertMetaTags };
