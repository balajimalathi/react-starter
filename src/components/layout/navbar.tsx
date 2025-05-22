"use client";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react";
import { Logo } from "../icons/logo";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { Search } from "../search";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";

export function NavBar() {
  const links = marketingConfig.mainNav;
  const exploreNav = marketingConfig.exploreNav;

  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  const selectedLayout = segments[0]; // or any index

  return (
    <header className={`sticky top-0 z-40 flex w-full justify-center bg-background transition-all border-b`}>

      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={false}
      >
        <Logo className="size-12 shrink-0" />
        <NavigationMenu className="pl-8 hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent className="p-0">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4" key={`root`}>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Logo className="size-10" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>


                  {exploreNav.map((route) => (
                    <ListItem key={route.title} href={route.href} title={route.title}>
                      {route.description}
                    </ListItem>
                  ))}
                  {/* 
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {links.map((route) => (
              route.children.length != 0 ?
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary gap-2",

                      route.href.startsWith(`/${selectedLayout}`)
                        ? "text-black dark:text-white"
                        : "text-muted-foreground"
                    )}
                  > {route.title}</NavigationMenuTrigger>
                  <NavigationMenuContent key={route.href + 'content'} className="p-0">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {route.children.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> :
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuLink
                    href={route.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      route.href.startsWith(`/${selectedLayout}`)
                        ? "text-black dark:text-white"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.title}
                    {/* <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span> */}
                  </NavigationMenuLink>
                </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-grow justify-end gap-2 items-center">


          <Search className="w-80 justify-start sm:w-80 md:w-80 lg:w-96 mr-8 md:mr-0" />
          <Link
            to={siteConfig.login}
            target="_self"
            rel="noreferrer"
          >
            <Button
              className="hidden gap-2 px-5 md:flex"
              variant="outline"
              size="sm"
            >
              <span>Login</span>
            </Button>
          </Link>
        </div>

      </MaxWidthWrapper>



    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}
            {/* <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span> */}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>

        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
