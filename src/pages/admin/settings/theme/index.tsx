import { Skeleton } from "@/components/ui/skeleton"
import * as React from "react"

import CardsNewYork from "./components/example"

export function Component() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="space-y-8">
      {!mounted ? (
        <div className="grid md:gap-4 lg:grid-cols-10 xl:gap-6">
          <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-6">
            <Skeleton className="h-[218px] w-full" />
            <div className="grid gap-1 sm:grid-cols-[260px_1fr] md:hidden">
              <Skeleton className="h-[218px] w-full" />
              <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
                <Skeleton className="h-[218px] w-full" />
              </div>
              <div className="pt-3 sm:col-span-2 xl:pt-4">
                <Skeleton className="h-[218px] w-full" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="space-y-4 xl:space-y-6">
                <Skeleton className="h-[218px] w-full" />
                <Skeleton className="h-[218px] w-full" />
                <Skeleton className="h-[218px] w-full" />
              </div>
              <div className="space-y-4 xl:space-y-6">
                <Skeleton className="h-[218px] w-full" />
                <Skeleton className="h-[218px] w-full" />
                <div className="hidden xl:block">
                  <Skeleton className="h-[218px] w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-6 xl:col-span-4 xl:space-y-6">
            <div className="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
              <Skeleton className="h-[218px] w-full" />
              <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
                <Skeleton className="h-[218px] w-full" />
              </div>
              <div className="pt-3 sm:col-span-2 xl:pt-4">
                <Skeleton className="h-[218px] w-full" />
              </div>
            </div>
            <div className="hidden md:block">
              <Skeleton className="h-[218px] w-full" />
            </div>
            <Skeleton className="h-[218px] w-full" />
          </div>
        </div>
      ) : (
        <CardsNewYork />
      )}
    </div>
  )
}
