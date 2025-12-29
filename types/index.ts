export type Tip = {
  label: string; // e.g. "Quality Beef"
  text: string;
};

export type ContentSection = {
  heading: string; // e.g. "What do you need to prepare a home-made burger?"
  intro: string;
  tips: Tip[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO: YYYY-MM-DD
  coverImage: string; // your path/url
  sections: ContentSection[];
  tags?: string[];
};

export type ContactUsFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
}