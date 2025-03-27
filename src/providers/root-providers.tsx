import { QueryClientProvider } from "@tanstack/react-query"
import type { FC, PropsWithChildren } from "react"
import { I18nextProvider } from "react-i18next"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { i18n } from "@/i18n"
import { queryClient } from "@/lib/query-client"
import { TailwindIndicator } from "@/components/ui/tailwind-indicator"

export const RootProviders: FC<PropsWithChildren> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
      <TailwindIndicator/>
    </QueryClientProvider>
  </I18nextProvider>
)
