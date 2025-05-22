import { useEffect } from "react"
import { useAuth } from "react-oidc-context"
import { apiClient, setAccessToken } from "@/lib/api-client"

export const useApiClient = () => {
  const auth = useAuth()

  useEffect(() => {
    if (auth.user?.access_token) {
      setAccessToken(auth.user.access_token)
    } else {
      setAccessToken(null)
    }
  }, [auth.user?.access_token])

  return apiClient
}
