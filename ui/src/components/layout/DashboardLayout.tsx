import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../composed/AppSidebar";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen bg-black rounded-3xl"> 
        <SidebarTrigger />
        <Outlet/>
      </main>
    </SidebarProvider>
  )
};
