import { useAuth } from "react-oidc-context"
import { apiClient, setAccessToken } from "@/lib/api-client"

export const useApiClient = () => {
  const auth = useAuth()

  const token = auth.user?.access_token
  if (token) {
    setAccessToken(token)
  }

  return apiClient
}
