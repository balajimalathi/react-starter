"use client";

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../theme/theme-switcher";

interface NavItem {
  title: string;
  href: string;
}

export function NavMobile() {
  const [open, setOpen] = useState(false);

  const links: NavItem[] = marketingConfig.mainNav;

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-2 top-2.5 z-60 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted",
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>

      <nav
        className={cn(
          "fixed inset-0 z-50 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
          open && "block",
        )}
      >
        <ul className="grid divide-y divide-muted">
          {links && links.length > 0 && links.map(({ title, href }) => (
            <li key={href} className="py-3">
              <Link
                to={href}
                onClick={() => setOpen(false)}
                className="flex w-full font-medium capitalize"
              >
                {title}
              </Link>
            </li>
          ))} 

          <li className="py-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex w-full font-medium capitalize"
            >
              Login
            </Link>
          </li>

          <li className="py-3">
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="flex w-full font-medium capitalize"
            >
              Sign up
            </Link>
          </li>



          {/* {session ? (
            <>
              {session.user.role === "ADMIN" ? (
                <li className="py-3">
                  <Link
                    href="/admin/users"
                    onClick={() => setOpen(false)}
                    className="flex w-full font-medium capitalize"
                  >
                    Admin
                  </Link>
                </li>
              ) : null}

              <li className="py-3">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Login
                </Link>
              </li>

              <li className="py-3">
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Sign up
                </Link>
              </li>
            </>
          )} */}
        </ul>

        {/* {documentation ? (
          <div className="mt-8 block md:hidden">
            <DocsSidebarNav setOpen={setOpen} />
          </div>
        ) : null} */}

        <div className="mt-5 flex items-center justify-end space-x-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
}
