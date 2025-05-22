import { QueryClientProvider } from "@tanstack/react-query"
import { type FC, type PropsWithChildren } from "react"
import { I18nextProvider } from "react-i18next"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { i18n } from "@/i18n"
import { queryClient } from "@/lib/query-client"
import { TailwindIndicator } from "@/components/ui/tailwind-indicator"
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from "react-oidc-context"
import { oidcConfig } from "@/components/auth/oidc-config"

export const RootProviders: FC<PropsWithChildren> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <Toaster richColors />
    <NextTopLoader showSpinner={false} color="#155dfc" />
    <AuthProvider {...oidcConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
        <TailwindIndicator />
      </QueryClientProvider>
    </AuthProvider>
  </I18nextProvider>
)
