import {
  keepPreviousData,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  // useSuspenseQuery,
} from "@tanstack/react-query"
import type { PaginationState } from "@tanstack/react-table"

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

// Function to decode JWT token
// function decodeToken(token: string) {
//   // Only run in browser environment
//   if (typeof window === 'undefined') return null;
  
//   try {
//     // Split the token and get the payload part
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     // Decode the base64 string
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split('')
//         .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
//         .join('')
//     );
//     // Parse the JSON
//     return JSON.parse(jsonPayload);
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }

export function useUser() {
  // const { token, keycloak } = useKeycloakAuth();
  
  // Only run full logic in browser environment
  if (typeof window === 'undefined') {
    // Return default profile during server-side rendering
    return {
      data: {
        userId: "",
        avatar: "",
        username: "User",
        email: "",
        password: "",
        birthdate: new Date(),
        registeredAt: new Date(),
        bio: "",
        urls: [],
      }
    };
  }
  
  // Default user profile with fallback values
  const defaultProfile = {
    userId: "",
    avatar: "",
    username: "User",
    email: "",
    password: "",
    birthdate: new Date(),
    registeredAt: new Date(),
    bio: "",
    urls: [],
  };
  
  // If we have a token, try to extract user info from it
  // console.log(token);
  // if (token) {
  //   const decodedToken = decodeToken(token);
    
  //   if (decodedToken) {
  //     // Extract user info from the token
  //     // Common claims in Keycloak tokens
  //     const userId = decodedToken.sub || "";
  //     const email = decodedToken.email || "";
  //     const name = decodedToken.name || decodedToken.preferred_username || "";
  //     const username = decodedToken.preferred_username || name || email.split('@')[0];
      
  //     // Generate avatar from name or email
  //     const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || username)}&background=random`;
      
  //     return {
  //       data: {
  //         userId,
  //         avatar,
  //         username,
  //         email,
  //         // Add other fields with default values
  //         password: "",
  //         birthdate: new Date(),
  //         registeredAt: new Date(),
  //         bio: "",
  //         urls: [],
  //       }
  //     };
  //   }
  // }
  
  // // If we have keycloak but no token info, try to get info from keycloak
  // if (keycloak && keycloak.tokenParsed) {
  //   const tokenInfo = keycloak.tokenParsed;
  //   const userId = tokenInfo.sub || "";
  //   const email = tokenInfo.email || "";
  //   const name = tokenInfo.name || tokenInfo.preferred_username || "";
  //   const username = tokenInfo.preferred_username || name || email.split('@')[0];
    
  //   // Generate avatar from name or email
  //   const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || username)}&background=random`;
    
  //   return {
  //     data: {
  //       userId,
  //       avatar,
  //       username,
  //       email,
  //       // Add other fields with default values
  //       password: "",
  //       birthdate: new Date(),
  //       registeredAt: new Date(),
  //       bio: "",
  //       urls: [],
  //     }
  //   };
  // }
  
  // Fallback to default profile if no token or keycloak info
  return {
    data: defaultProfile
  };
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
  // const { logout } = useKeycloakAuth();
  
  return useMutation({
    mutationFn: async () => {
      // Use Keycloak logout instead of API endpoint
      // logout();
      return { success: true };
    },
    mutationKey: ["user-logout"]
    // No need for onSuccess handler as Keycloak logout will handle the redirect
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
