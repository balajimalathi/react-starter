import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <img
              className="size-full object-cover object-center"
              src="/_static/flow.png"
              alt="preview landing"
              width={2000}
              height={1000}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
