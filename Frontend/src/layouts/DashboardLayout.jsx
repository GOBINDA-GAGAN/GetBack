import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/common/Sidebar";
import {Navbar} from "../components/common/Navbar";

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1">
        <div className="border-b  flex">
         <SidebarTrigger />
          <Navbar />
        </div>

        <div className="p-2">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;