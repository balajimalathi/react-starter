 
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar" 
import {   Outlet } from "react-router-dom"
 
import { AppSidebar } from "@/components/nav-sidebar/app-sidebar"
import { NavBreadcrumb } from "@/components/nav-sidebar/nav-breadcrumb"
import { Search } from "@/components/search"
import { ThemeSwitcher } from "@/components/theme/theme-switcher"
import { SIDEBAR_COOKIE_NAME } from "@/constants"

export function Component() {
  const sidebarState = localStorage.getItem(SIDEBAR_COOKIE_NAME) === "true"

  return (
    <SidebarProvider defaultOpen={sidebarState}>
      <AppSidebar />
      <SidebarInset className="w-full overflow-hidden">
        <div className="sticky top-0 z-10">
          <header className="flex h-14 w-full shrink-0 items-center justify-between border-b bg-background/80 px-2 backdrop-blur-sm sm:h-16 sm:px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-0.5 sm:-ml-1" />
              <Separator orientation="vertical" className="mr-2 hidden h-4 sm:block" />
              <NavBreadcrumb className="hidden sm:flex" />
            </div>
            <div className="ml-auto flex flex-1 space-x-2 px-2 sm:px-4 lg:max-w-lg">
              <Search /> 
              <ThemeSwitcher />
            </div>
          </header>
        </div>

        <ScrollArea className="flex h-[calc(100vh-5rem)] flex-col gap-4 p-2 pt-0 sm:h-[calc(100vh-5rem)] sm:p-4">
          <div className="p-2 sm:py-4">
            <Outlet />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  )
}
