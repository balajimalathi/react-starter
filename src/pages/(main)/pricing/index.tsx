
import { Logo } from "@/components/icons/logo"

export function Component() {
  return (
    <div className="grid h-full place-items-center">
      <div className="grid place-items-center px-4 py-16 xl:grid-cols-2 xl:gap-24">
        <div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
          <a
            href="https://github.com/TinsFox/vite-boilerplate"
            className="animate-slide-top [animation-fill-mode:backwards] xl:animate-slide-left xl:[animation-delay:0.5s] xl:[animation-fill-mode:backwards]"
          >
            <Logo />
          </a>
          <h1
            data-heading
            className="mt-8 animate-slide-top text-4xl font-medium text-foreground [animation-delay:0.3s] [animation-fill-mode:backwards] md:text-5xl xl:mt-4 xl:animate-slide-left xl:text-6xl xl:[animation-delay:0.8s] xl:[animation-fill-mode:backwards]"
          >
            <a href="https://github.com/TinsFox/vite-boilerplate">
              Shadcn UI Boilerplate
            </a>
          </h1>
          <p
            data-paragraph
            className="mt-6 animate-slide-top text-xl/7 text-muted-foreground [animation-delay:0.8s] [animation-fill-mode:backwards] xl:mt-8 xl:animate-slide-left xl:text-xl/6 xl:leading-10 xl:[animation-delay:1s] xl:[animation-fill-mode:backwards]"
          >
            Check the
            {" "}
            <a
              className="underline hover:no-underline"
              href="https://shadcnui-boilerplate.pages.dev/guide/what-is-shadcn-ui-boilerplate"
            >
              Getting Started guide
            </a>
            {" "}
            file for how to get your project off the ground!
          </p>
        </div>
        <ul className="mt-16 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">

        </ul>
      </div>
    </div>
  )
}
