export const BLOG_CATEGORIES: {
  title: string;
  slug: "updates" | "education";
  description: string;
}[] = [
  {
    title: "Updates",
    slug: "updates",
    description: "Updates and announcements from RepoVox.",
  },
  {
    title: "Education",
    slug: "education",
    description: "Educational content about SaaS management.",
  },
];

export const BLOG_AUTHORS = {
  mickasmt: {
    name: "mickasmt",
    image: "/_static/avatars/mickasmt.png",
    twitter: "miickasmt",
  },
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
  balaji: {
    name: "balaji",
    image: "/_static/avatars/balaji.png",
    twitter: "balajimalathi_",
  },
};
