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

      <main className="w-full">
        <div className="border-b  flex">
         <SidebarTrigger />
          <Navbar />
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;