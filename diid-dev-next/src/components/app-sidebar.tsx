import { LibraryBig, Monitor, UserPen, Github, ScrollText } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Monitor,
  },
  {
    title: "About",
    url: "/about",
    icon: UserPen,
  },
  {
    title: "Experiences",
    url: "/experiences",
    icon: LibraryBig,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: Github,
  },
  {
    title: "Certificates",
    url: "/certificates",
    icon: ScrollText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
        <div className="flex items-center justify-center p-4">
            <Image
              src="https://i.imgur.com/f38irBM.png" 
              alt="Your Logo"
              width={500} 
              height={500}
            />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
