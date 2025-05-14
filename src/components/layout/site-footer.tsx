import * as React from "react"; 

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { Logo } from "../icons/logo";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-muted", className)}>
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center py-14">
        <div className="grid w-full grid-cols-1 gap-10 text-center md:grid-cols-5 md:text-left">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center justify-center space-x-1.5 md:justify-start">
              <Logo className="size-8" />
              <span className="font-urban text-xl font-bold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              RepoVox is an AI tool that automates communication for GitHub users. It offers insightful summaries of your team's activities, maximizing efficiency.
            </p>
            <Link to="/docs" className="mt-4 inline-block text-sm text-primary hover:underline">
              Learn More
            </Link>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <span className="text-sm font-medium text-foreground">
                {section.title}
              </span>
              <ul className="mt-4 list-inside space-y-3">
                {section.items?.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
          <span className="text-sm text-muted-foreground">
            © 2025. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
