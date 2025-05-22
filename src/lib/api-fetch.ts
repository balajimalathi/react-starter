import { FetchError, ofetch } from "ofetch"

import { getRedirectToLoginUrl } from "./utils"

export const apiFetch = ofetch.create({
  credentials: "include",
  retry: false,
  onRequest: async ({ options }) => {
    const header = new Headers(options.headers)

    options.headers = header

    if (options.method && options.method.toLowerCase() !== "get") {
      if (typeof options.body === "string") {
        options.body = JSON.parse(options.body)
      }
      if (!options.body) {
        options.body = {}
      }
    }
  },
  onResponse() {
    // TODO: response interceptor
  },
  onResponseError(context) {
    if (context.response.status === 401) {
      return redirectToLogin()
    }
  },
})

export function redirectToLogin() {
  if (window.location.pathname === "/login") {
    return
  }
  const redirectUrl = getRedirectToLoginUrl()
  window.location.replace(redirectUrl)
}

export const getFetchErrorMessage = (error: Error) => {
  if (error instanceof FetchError) {
    try {
      const json = error.response?._data
      const { message } = json
      return `${message || error.message}`
    } catch {
      return error.message
    }
  }

  return error.message
}

/**
 
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { useKeycloakAuth } from '../context/keycloak-auth'

export const useAuthAxios = () => {
  const { token, updateToken, logout, isTokenExpired } = useKeycloakAuth()

  const authAxios = axios.create()

  // Request interceptor
  authAxios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Check if token is expired before making the request
      if (token && isTokenExpired()) {
        try {
          // Try to refresh the token
          const refreshed = await updateToken()
          if (!refreshed) {
            // If refresh failed, logout and reject the request
            logout()
            return Promise.reject(new Error('Authentication session expired. Please login again.'))
          }
        } catch (error) {
          // If there's an error during refresh, logout and reject
          logout()
          return Promise.reject(error)
        }
      }

      // Attach token from context if available
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  // Response interceptor
  authAxios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

      // Handle 401 Unauthorized errors (token expired)
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        try {
          // Attempt to refresh token
          const refreshed = await updateToken()
          
          if (refreshed) {
            // Retry original request with new token
            if (token) {
              originalRequest.headers.set('Authorization', `Bearer ${token}`)
            }
            return authAxios(originalRequest)
          } else {
            // If refresh fails, log out
            logout()
            return Promise.reject(new Error('Authentication session expired. Please login again.'))
          }
        } catch (refreshError) {
          // If refresh throws an error, log out
          console.error('Token refresh failed:', refreshError)
          logout()
          return Promise.reject(error)
        }
      }
      return Promise.reject(error)
    }
  )

  return authAxios
}

 */