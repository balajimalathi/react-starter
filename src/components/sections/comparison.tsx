import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Check, Divide, DoorClosedIcon, Users, X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { HeaderSection } from "../shared/header-section";

const repoBuzzApproaches = [
  "AI-generated summaries for quick understanding",
  "Faster approvals with automated insights",
  "Auto-detect security issues like hardcoded secrets",
  "Instant insights for standups with AI-generated reports",
  "Standardized AI reviews ensuring best practices in every PR",
  "Impact analysis highlights breaking changes & refactoring effects",
];

const traditionalApproaches = [
  "Manually go through diffs",
  "Long review cycles due to manual inspection",
  "Hard to detect vulnerabilities without security expertise",
  "Delayed decision-making due to lack of clear insights",
  "Inconsistent review quality depending on the reviewer's expertise",
  "Risk of missing critical changes in large diffs",
]

export default function Comparison() {
  return (
    <section className="bg-muted py-20">
      <MaxWidthWrapper>
        <HeaderSection
          label="Comparison"
          title="Traditional Code Reviews vs. RepoBuzz"
          subtitle="See how AI-driven reviews eliminate inefficiencies and accelerate your development workflow."
        />
        <div className="grid-col-1 mt-8 grid gap-4 md:grid-cols-2">
          <Card className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Traditional Approach</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {traditionalApproaches.map((item) =>
                  <div className="flex items-center gap-2" key={item}>
                    <X className="size-4" />
                    <p>{item}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">RepoVox Approach</CardTitle>

            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {repoBuzzApproaches.map((item) =>
                  <div className="flex items-center gap-2" key={item}>
                    <Check className="size-4" />
                    <p>{item}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>



      </MaxWidthWrapper>
    </section>
  );
}
