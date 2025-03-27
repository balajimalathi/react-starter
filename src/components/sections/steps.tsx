"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HeaderSection } from "../shared/header-section";

const videoSources = [
  { type: "image", src: "/_static/docs/lite-repo-connect.png", alt: "Step 1 Image" },
  { type: "image", src: "/_static/docs/repovox-app-installation.gif", alt: "Step 2 Image" },
  { type: "image", src: "/_static/docs/lite-integration-page.png", alt: "Step 3 Image" },
  { type: "image", src: "/_static/docs/lite-git-integration-page.png", alt: "Step 4 Image" },
];

const steps = [
  "Login & Connect GitHub",
  "Install RepoVox GitHub App",
  "Connect Social Media",
  "Configure Your Repo & Actions"];

const stepsDescription = [
  "Sign in to RepoVox and link your GitHub account to start integrating your repositories.",
  "To enable webhook connectivity, install the RepoVox GitHub App on your GitHub account or specific repositories.",
  "Connect your preferred social media platforms like Twitter, LinkedIn, and Dev.to to automate content posting.",
  "Select a GitHub repository and branch. > " +
  "Choose the trigger action (e.g., Pull Request Merged, New Commit, etc.). > " +
  "Define where the content should be posted."
];

export default function StepsSection() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div>
      <section className="xs:px-4 mx-auto max-w-6xl py-16 md:px-12">
        <HeaderSection
          label="Automation"
          title="Faster, Smarter, and Effortless Code Insights"
          subtitle="Let AI handle code analysis while you focus on building great software—get instant reviews without manual effort."
        />
        <div className="grid grid-cols-1 items-center gap-12 pt-8 md:grid-cols-2">
          <div className="p-4">
            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => setSelectedStep(Number(value) || 0)}
            >
              {steps.map((title, index) => (
                <AccordionItem key={index} value={String(index)}>
                  <AccordionTrigger
                    className={`text-lg font-semibold tracking-tight sm:text-xl ${selectedStep === index ? "" : "text-muted-foreground"
                      }`}
                  >
                    {title}
                  </AccordionTrigger>
                  <AccordionContent>{stepsDescription[index]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right: Dynamic Image/Video */}
          <div className="flex justify-center">
            {videoSources[selectedStep].type === "video" ? (
              <video key={videoSources[selectedStep].src} className="w-full max-w-md rounded-xl shadow-lg" autoPlay loop muted>
                <source src={videoSources[selectedStep].src} type="video/mp4" />
              </video>
            ) : (
              <img key={videoSources[selectedStep].src} src={videoSources[selectedStep].src} alt={videoSources[selectedStep].alt} width={500} height={300} className="rounded-xl shadow-lg" />
            )}
          </div>
        </div>
      </section>
    </div>

  );
}
