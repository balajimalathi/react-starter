import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const aboutRepoBuzzFAQs = [
  {
    id: "item-1",
    question: "What is RepoVox?",
    answer: "RepoVox is an AI-powered platform that transforms GitHub activity into shareable content for social media and blogs."
  },
  {
    id: "item-2",
    question: "How does RepoVox work?",
    answer: "RepoVox connects to your GitHub repositories, listens for triggers like commits or PR merges, and generates AI-driven posts ready for sharing."
  },
  {
    id: "item-3",
    question: "Which platforms does RepoVox integrate with?",
    answer: "RepoVox integrates with GitHub, Slack, Microsoft Teams, Discord, Notion, Confluence, and email for seamless workflow automation."
  },
  {
    id: "item-4",
    question: "How does RepoVox help in standups and code reviews?",
    answer: "RepoVox provides AI-generated commit summaries and insights, allowing teams to quickly understand progress and make informed decisions in standups."
  },
  {
    id: "item-5",
    question: "Can I use RepoVox for private repositories?",
    answer: "Yes, RepoVox can access both public and private repositories with your permission."
  },
  {
    id: "item-6",
    question: "Is my GitHub data secure?",
    answer: "Yes, RepoVox only accesses the necessary data and follows industry best practices for security and privacy."
  },
  {
    id: "item-7",
    question: "Can I disconnect my GitHub account at any time?",
    answer: "Yes, you can revoke GitHub access anytime from your settings, and we will immediately stop tracking repository activities."
  },
  {
    id: "item-8",
    question: "Does RepoVox support team collaboration?",
    answer: "Currently, RepoVox is designed for individual developers, but we are working on team collaboration features."
  },
  {
    id: "item-9",
    question: "What happens if I exceed my repo or trigger limit?",
    answer: "If you reach your limit, you'll need to upgrade to a higher plan or remove some repositories to continue using RepoVox."
  },
  {
    id: "item-10",
    question: "I have another question?",
    answer: "You can always reach out to me on Twitter > @balajimalathi_ or via email > balaji.m@skndan.com. I'm here to help!"
  },
];


export function Faq() {
  return (
    <section className="container max-w-4xl pb-20">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions or reach out for personalized support."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {aboutRepoBuzzFAQs.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
