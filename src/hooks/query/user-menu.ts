import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import {
  Archive,
  ArchiveX,
  Grid, 
  MessagesSquare,
  Store,
  Trash2,
} from "lucide-react"

import type { IMenu } from "@/schema/menu"

export const queryNavMenu = () => queryOptions({
  queryKey: ["nav-menu"],
  queryFn: async () => mockMenu(),
})

export function useNavMenu() {
  return useSuspenseQuery(queryNavMenu())
}

async function mockMenu(): Promise<IMenu[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menus)
    }, 1000)
  })
}

export const menus: IMenu[] = [
  {
    title: "Dashboard",
    icon: Grid,
    to: "/admin/dashboard/overview"
  },
  {
    title: "Stores",
    icon: Store,
    to: "/admin/stores"
  },
  {
    title: "Product",
    label: "12",
    icon: MessagesSquare,
    to: "#",
    children: [
      {
        title: "Products",
        label: "23",
        icon: ArchiveX,
        to: "/admin/product",
      },
      {
        title: "Brands",
        icon: Trash2,
        to: "/admin/product/brand",
      },
      {
        title: "Category",
        icon: Archive,
        to: "/admin/product/category",
      },
    ],
  }
] as const
