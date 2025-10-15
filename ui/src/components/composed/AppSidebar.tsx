"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { SidebarContent, Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "../ui/sidebar";
import { Inbox, MapPin, ShieldBan, Gauge, ShieldAlert, BadgeInfo, ChevronDown, ChevronUp, FolderKanban} from "lucide-react"
 

const items = [
  {
    title: "Blocked IP",
    url: "/dashboard/blocked-ip",
    icon: ShieldBan,
  },
  {
    title: "White List",
    url: "/dashboard/white-list",
    icon: Inbox,
  },
  {
    title: "Rate Limiting",
    url: "/dashboard/rate-limiting",
    icon: Gauge,
  },
  {
    title: "Geo Fencing",
    url: "/dashboard/geo-fencing",
    icon: MapPin,
  },
]

const logs = [
  {
    title: "Access Logs",
    url: "/dashboard/access-logs",
    icon: BadgeInfo,
  },
  {
    title: "Attack Logs",
    url: "/dashboard/attack-logs",
    icon: ShieldAlert,
  }
]

export function AppSidebar() {
  return (
   <Sidebar variant="inset" collapsible="icon">

    <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>project-1</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>project-2</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>



      <SidebarContent  >
        <SidebarGroup>
          <SidebarGroupLabel>dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Logs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {logs.map((item) => (
                
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <FolderKanban /> Project
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Inbox</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Setting</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}