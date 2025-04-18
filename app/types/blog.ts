export type BibliographyItem = {
  author: string;
  year: string;
  title: string;
  source: string;
  link: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  content: string;
  readTime: string;
  bibliography?: BibliographyItem[];
}; 