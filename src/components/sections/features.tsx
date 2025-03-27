
import { HeaderSection } from "@/components/shared/header-section";
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
             
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
