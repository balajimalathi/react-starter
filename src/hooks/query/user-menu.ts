import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import {
  Archive,
  ArchiveX,
  ChartNoAxesCombined,
  Gauge, 
  List,
  ListTree,
  MessagesSquare,
  Orbit,
  Table,
  TableProperties,
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
    title: "dashboard",
    icon: Gauge,
    to: "/dashboard",
    children: [
      {
        title: "overview",
        label: "128",
        icon: Gauge,
        to: "/dashboard/overview",
      },
      {
        title: "analysis",
        label: "9",
        icon: ChartNoAxesCombined,
        to: "/dashboard/analysis",
      },
      {
        title: "workplace",
        icon: Orbit,
        to: "/dashboard/workplace",
      },
    ],

  },
  {
    title: "forms",
    label: "12",
    icon: MessagesSquare,
    to: "/form",
    children: [
      {
        title: "basic_form",
        label: "23",
        icon: ArchiveX,
        to: "/form/basic-form",
      },
      {
        title: "step_form",
        icon: Trash2,
        to: "/form/step-form",
      },
      {
        title: "advanced_form",
        icon: Archive,
        to: "/form/advanced-form",
      },
    ],
  },
  {
    title: "table",
    to: "/list",
    icon: Table,
    children: [
      {
        title: "data_table",
        label: "128",
        icon: List,
        to: "/list/data-table",
      },
      {
        title: "pro_table",
        icon: TableProperties,
        to: "/list/pro-table",
      },
      {
        title: "table_list",
        label: "972",
        icon: TableProperties,
        to: "/list/table-list",
      },
      {
        title: "card_list",
        label: "8",
        icon: ListTree,
        to: "/list/card-list",
      },
    ],
  }
] as const
