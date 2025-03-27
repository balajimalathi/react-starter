import Link from "next/link";

import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
// https://insigh.to/b/repovox
export default function Features() {
  return (
    <section>
      <div className="py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Features"
            title="Smarter Code Reviews with AI"
            subtitle="Automate code summarization, detect security vulnerabilities, and get instant insights for standups and approvals."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border   blur-2xl duration-300 group-hover:-translate-y-1/4  dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="relative flex size-12 rounded-2xl border border-border text-green-600 shadow-sm *:relative *:m-auto">
                      <p className="text-2xl">{feature.icon}</p>
                    </div>

                    <p className="mt-6 pb-2 text-lg font-semibold">
                      {feature.title}
                    </p>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>

                    {/* <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                      >
                        <Link href="/" className="flex items-center gap-2">
                          <span>Visit the site</span>
                          <Icons.arrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
