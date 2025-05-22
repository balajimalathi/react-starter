import { SidebarNavItem, SiteConfig } from "types";


export const siteConfig: SiteConfig = {
  name: "RepoVox",
  description:
    "Create a buzz around your products your are building with RepoVox. Stay connected with your audiences by send project updates in no time",
  url: `site_url`,
  ogImage: `/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/balajimalathi_",
    github: "https://github.com/balajimalathi",
  },
  login: "/auth/sign-in",
  mailSupport: "repovox.official@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Legal",
    items: [
      {
        title: "Terms", href: "/terms",
        children: []
      },
      {
        title: "Privacy", href: "/privacy",
        children: []
      },
      {
        title: "Refunds", href: "/refunds",
        children: []
      },
      {
        title: "About Us", href: "/about",
        children: []
      },
    ],
  },
  {
    title: "Links",
    items: [
      {
        title: "Blog", href: "/blog",
        children: []
      },
      {
        title: "Contact", href: "/contact-us",
        children: []
      },
    ],
  },
  {
    title: "Product",
    items: [
      {
        title: "Roadmap", href: "/roadmap",
        children: []
      },
      {
        title: "Releases", href: "/releases",
        children: []
      },
    ],
  },
  {
    title: "Docs",
    items: [
      {
        title: "Introduction", href: "/docs",
        children: []
      },
      {
        title: "Setup", href: "/docs/setup",
        children: []
      },
    ],
  },
];
