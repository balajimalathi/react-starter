import { QueryClientProvider } from "@tanstack/react-query"
import { Suspense, type FC, type PropsWithChildren } from "react"
import { I18nextProvider } from "react-i18next"
import { Spinner } from '@/components/ui/spinner';
import { ThemeProvider } from "@/components/theme/theme-provider"
import { i18n } from "@/i18n"
import { queryClient } from "@/lib/query-client"
import { TailwindIndicator } from "@/components/ui/tailwind-indicator"
import NextTopLoader from 'nextjs-toploader';

export const RootProviders: FC<PropsWithChildren> = ({ children }) => (
  <Suspense
    fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      } 
  >
    <I18nextProvider i18n={i18n}>
      <NextTopLoader showSpinner={false} color="#22c55e" />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
        <TailwindIndicator />
      </QueryClientProvider>
    </I18nextProvider>
  </Suspense>
)
