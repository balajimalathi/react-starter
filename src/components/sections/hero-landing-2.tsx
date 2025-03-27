
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons"; 
import { Check } from "lucide-react"; 

const repobuzzApproaches = [
  "Save hours on manual code reviews",
  "Enhance team productivity with AI - driven insights",
  "Ensure code security & maintain best practices",
];

export default async function HeroLanding2() {
  return (
    <section className="relative py-8 sm:py-8 lg:pb-20">
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img className="h-auto w-full origin-bottom-right scale-150 dark:invert lg:mx-auto lg:w-auto lg:scale-75 lg:object-cover" width={1000} height={1000} src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-center xl:grid-cols-2">
          <div className="text-center md:px-16 lg:px-0 lg:text-left xl:col-span-1 xl:pr-20">
            <h1 className="text-balance font-urban text-5xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
              Let your code Speak for itself!
            </h1>
            <p className="font-inter mt-8 text-lg text-muted-foreground sm:mt-6">{`Stay on top of development progress by highlighting key updates that matter to your team.`}</p>

            <div className="mt-6 flex justify-center lg:mt-2 lg:justify-start">
              <div className="mt-4 space-y-4 sm:mt-8">
                {repobuzzApproaches.map((item) =>
                  <div className="flex items-center gap-2 " key={item}>
                    <Check className="size-4 text-green-600" />
                    <p>{item}</p>
                  </div>)}
              </div>
            </div>

            <a
              href="/login" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-14 gap-2 bg-green-600 px-8",
              )}
            >
              <span className="text-lg font-bold text-white">Get started for free</span>
              <Icons.arrowRight className="size-4 text-white" />
            </a>
          </div>

          <div className="xl:col-span-1">
            <img className="mx-auto w-full" src="/_static/hero.webp" width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
