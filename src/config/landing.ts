import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Empower your projects",
    description:
      "Unlock the full potential of your projects with our open-source SaaS platform. Collaborate seamlessly, innovate effortlessly, and scale limitlessly.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Collaborative",
        description: "Work together with your team members in real-time.",
        icon: "laptop",
      },
      {
        title: "Innovative",
        description: "Stay ahead of the curve with access constant updates.",
        icon: "settings",
      },
      {
        title: "Scalable",
        description:
          "Our platform offers the scalability needed to adapt to your needs.",
        icon: "search",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "AI-Powered Commit Summaries",
    description: "Turn raw commits into clear, readable summaries in seconds no manual writing.",
    link: "/features/ai-summaries",
    icon: "🧠",
  },
  {
    title: "Auto-Post to Socials",
    description: "Instantly share your progress on Twitter, Slack, and more, without breaking flow.",
    link: "/features/social-sharing",
    icon: "📣",
  },
  {
    title: "Seamless PR Summaries",
    description: "Ship pull requests with smart context so everyone stays aligned.",
    link: "/features/pr-summaries",
    icon: "🔍",
  },
  {
    title: "X(Twitter) & Slack Updates",
    description: "Keep your team and stakeholders in the loop with automated updates.",
    link: "/features/integrations",
    icon: "📬",
  },
  {
    title: "Build in Public, Effortlessly",
    description: "Auto-document your dev journey to grow your audience while you code.",
    link: "/features/build-in-public",
    icon: "🌱",
  },
  {
    title: "Solo-Friendly Setup",
    description: "Built for indie hackers & solo devs-zero config, just plug and push.",
    link: "/features/solo-dev-mode",
    icon: "👨‍💻",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1910280914489258229",
    review: `✨ Just updated RepoVox! \n
- Removed testimonials section from the marketing page for a cleaner UI.  
- Added platform-specific dependencies for better cross-device compatibility.  
\n#DevTools #CodeUpdates #RepoVox`,
  },
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1910265560496996473",
    review:
      `🚀 RepoVox Updates:  
- New DodoPayments integration for seamless subscriptions  
- Redesigned pricing pages & customer portal  
- Enhanced release notes with visuals  
- Smoother UX & testimonials added  

#DevTools #SaaS #CodeReview  
`,
  },
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1909623755325710514",
    review:
      `Just shipped updates to RepoVox! ✨  

- Cleaner landing page & plan tables  
- Auto-posting to X & Slack  
- Better mobile nav  

Boost your side project's visibility while you code.  

#BuildInPublic #IndieHacker #DevTools`,
  },
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1908455617490022523",
    review:
      `
🚀 RepoVox update: New feedback button, improved beta banner, toggled upgrade card, better Slack selector. Try it & share feedback! #DeveloperTools  
`,
  },
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1907719519352557924",
    review:
      `🚀 Big Update!  

🔧 Fixed switch cases in API routes.  
🎨 Cleaned up Twitter card UI.  
📱 Wider marketing pages (6xl).  
📢 Added "Releases" to nav & updated roadmap.  

Details: https://repovox.com #DevLife #CodeUpdate
      `,
  },
  {
    name: "Balaji Malathi",
    job: "@balajimalathi_",
    image: "/_static/avatars/balaji2.jpg",
    link: "https://x.com/BalajiMalathi_/status/1898656012946571498",
    review:
      `
Just pushed some cleanups and improvements!  

✅ Added 'key' prop to '<Card>' for better React rendering.
🎨 Enhanced layout styling with 'cn' utility for smoother UI.
✨ Moved 'NextTopLoader' for better loading indicator placement.
`,
  },


  // {
  //   name: "Jason Stan",
  //   job: "Web Designer",
  //   image: "https://randomuser.me/api/portraits/men/9.jpg",
  //   review:
  //     "Thanks to next-saas-razorPay-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  // },
  // {
  //   name: "Emily Brown",
  //   job: "Marketing Manager",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   review:
  //     "next-saas-razorPay-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  // },
  // {
  //   name: "Jason Stan",
  //   job: "Web Designer",
  //   image: "https://randomuser.me/api/portraits/men/9.jpg",
  //   review:
  //     "Thanks to next-saas-razorPay-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  // },
  // {
  //   name: "Emily Brown",
  //   job: "Marketing Manager",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   review:
  //     "next-saas-razorPay-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  // },
  // {
  //   name: "Jason Stan",
  //   job: "Web Designer",
  //   image: "https://randomuser.me/api/portraits/men/9.jpg",
  //   review:
  //     "Thanks to next-saas-razorPay-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  // },
];
