import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { useAtom } from "jotai"
import { useEffect, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

import { navOpenItemsAtom } from "@/atoms/nav"
import type { IMenu } from "@/schema/menu"
import { ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export function NavMain({
  items,
}: {
  items: IMenu[]
}) {
  const { t } = useTranslation("navigation")
  const location = useLocation()
  const [openItems, setOpenItems] = useAtom(navOpenItemsAtom)

  const { isPathActive, isParentActive } = useMemo(() => {
    const isPathActive = (path: string) => {
      return location.pathname === path || location.pathname.startsWith(`${path}/`)
    }

    const isParentActive = (item: IMenu) => {
      return item.children?.some((child) => isPathActive(child.to))
    }

    return { isPathActive, isParentActive }
  }, [location.pathname])

  useEffect(() => {
    const newOpenItems: Record<string, boolean> = { ...openItems }
    let hasChanges = false

    items.forEach((item) => {
      const shouldBeOpen = isPathActive(item.to) || isParentActive(item)
      if (shouldBeOpen && !newOpenItems[item.title]) {
        newOpenItems[item.title] = true
        hasChanges = true
      }
    })

    if (hasChanges) {
      setOpenItems(newOpenItems)
    }
  }, [location.pathname, items, isPathActive, isParentActive, openItems, setOpenItems])

  // const handleToggle = (title: string) => {
  //   setOpenItems((prev) => ({
  //     ...prev,
  //     [title]: !prev[title],
  //   }))
  // }

  // const handleToggleAll = () => {
  //   const allExpanded = items.every((item) => openItems[item.title])
  //   const newOpenItems: Record<string, boolean> = {}
  //   items.forEach((item) => {
  //     newOpenItems[item.title] = !allExpanded
  //   })
  //   setOpenItems(newOpenItems)
  // }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            className="group/collapsible">
            {item.children?.length ?
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.children?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.to}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem> :
              <SidebarMenuButton
                asChild
                tooltip={t(item.title)}
                data-active={item.children ? false : isPathActive(item.to)}
              >
                <Link to={item.to}>
                  <item.icon />
                  <span>{t(item.title)}</span>
                </Link>
              </SidebarMenuButton>

            }
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}


{/* <SidebarMenuButton
  asChild
  tooltip={t(item.title)}
  data-active={item.children ? false : isPathActive(item.to)}
>
  <Link to={item.to}>
    <item.icon />
    <span>{t(item.title)}</span>
  </Link>
</SidebarMenuButton>
{
  item.children?.length ? (
    <>
      <CollapsibleTrigger asChild>
        <SidebarMenuAction className="data-[state=open]:rotate-90">
          <ChevronRight />
          <span className="sr-only">Toggle</span>
        </SidebarMenuAction>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.children?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton
                asChild
                data-active={isPathActive(subItem.to)}
              >
                <Link to={subItem.to}>
                  <span>{t(subItem.title)}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </>
  ) : null
} */}
