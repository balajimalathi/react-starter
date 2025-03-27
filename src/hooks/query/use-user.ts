import {
  keepPreviousData,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  // useSuspenseQuery,
} from "@tanstack/react-query"
import type { PaginationState } from "@tanstack/react-table"
import { useNavigate } from "react-router-dom"

import type { ILoginForm, IUserProfile, IUsers } from "@/schema/user"
import { apiFetch } from "@/lib/api-fetch"

export const queryUser = () => queryOptions({
  queryKey: ["userInfo"],
  queryFn: async () => apiFetch<IUserProfile>("/api/users"),
})

export const queryUserInfo = () =>
  queryOptions({
    queryKey: ["user-info"],
    queryFn: async () => apiFetch<{
      data: IUserProfile
    }>(`/api/users/info`),
  })

export function useUser() {

  const mockUserProfile = {
    data: {
      userId: "user_12345",
      avatar: "https://example.com/avatar.png",
      password: "hashed_password_here",
      birthdate: new Date("1995-06-15"),
      registeredAt: new Date("2024-01-01"),
      username: "john_doe",
      email: "john.doe@example.com",
      bio: "Full-stack developer & coffee lover.",
      urls: [
        { value: "https://johndoe.dev" },
        { value: "https://github.com/johndoe" },
      ],
    }
  }

  return mockUserProfile;

  // return useSuspenseQuery(queryUserInfo())
}

export function useUserLoginMutation() {
  return useMutation({
    mutationFn: async (loginForm: ILoginForm) =>
      await apiFetch("/api/auth/login", {
        method: "POST",
        body: loginForm,
      }),
    mutationKey: ["user-login"],
  })
}

export function useUserLogoutMutation() {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: async () => await apiFetch("/api/logout"),
    mutationKey: ["user-logout"],
    onSuccess: () => {
      localStorage.clear()
      navigate("/login")
    },
  })
}

export function useUsers(pagination?: PaginationState, searchParams?: Partial<IUsers>) {
  const { pageIndex = 1, pageSize = 10 } = pagination || {}
  const { data, isPending, isFetching, refetch } = useQuery({
    queryKey: ["users", pageIndex, pageSize, ...Object.entries(searchParams || {})],
    queryFn: async () => apiFetch<{
      list: IUsers[]
      total: number
      page: number
      pageSize: number
    }>("/api/users", {
      params: {
        page: pageIndex,
        pageSize,
        ...searchParams,
      },
    }),
    placeholderData: keepPreviousData,
  })

  return {
    isPending,
    isLoading: isFetching,
    refetch,
    data: {
      list: data?.list || [],
      total: data?.total || 0,
      page: data?.page || 0,
      pageSize: data?.pageSize || 0,
    },
  }
}

export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (user: IUsers) =>
      await apiFetch(`/api/${user.id}`, {
        method: "PUT",
        body: user,
      }),
    onSuccess: () => {
      // 更新用户列表缓存
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}
