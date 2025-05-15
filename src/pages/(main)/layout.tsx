import { NavMobile } from "@/components/layout/mobile-nav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <NavMobile />
      <NavBar />
      <main className="flex-1"><Outlet /></main>
      <SiteFooter />
    </div>
  )
}