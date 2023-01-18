export type News = {
  title: string;
  description: string;
  pubDate: string;
  link: string;
};

export type Rss = {
  rss: {
    channel: {
      title: string;
      description: string;
      pubDate: string;
      link: string;
      item: News[];
    };
  };
};
