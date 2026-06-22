import { NavLink } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Button } from "@/components/ui/button"
import diamondImage from "../../assets/sidebar/diamond.png"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";


import { sidebarItems } from "../../constants/sidebar.js";
import PremiumCard from "../PremiumCard.jsx";


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <div className="p-3 flex justify-between items-center border-accent border-b">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 56 40" fill="none" id="Logo"> <g id="logomark"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3333 0C23.7194 0 24.1033 0.00932962 24.4847 0.0280265C24.4924 0.0284028 24.4989 0.0222809 24.4989 0.0145938C24.4989 0.00716838 24.5049 0.0011489 24.5123 0.0011489H45.8418C46.2974 0.00137965 46.6667 0.373466 46.6667 0.83295C46.6666 1.05356 46.5798 1.26515 46.4251 1.42119L40.8322 7.05882H52.7444C53.5415 7.05882 54.27 7.52957 54.5456 8.27757C55.4857 10.829 56 13.5892 56 16.4706C56 29.4655 45.5533 40 32.6667 40C32.2808 40 31.8971 39.9896 31.5158 39.9709C31.5078 39.9705 31.5011 39.9768 31.5011 39.9848C31.5011 39.9926 31.4949 39.9989 31.4871 39.9989H10.1582C9.7026 39.9986 9.33333 39.6265 9.33333 39.1671C9.33336 38.9464 9.42022 38.7348 9.57487 38.5788L15.1655 32.9412H3.25562C2.45846 32.9412 1.73002 32.4704 1.4544 31.7224C0.514256 29.171 0 26.4109 0 23.5294C0 10.5345 10.4467 0 23.3333 0ZM31.3177 16.6556C29.3919 14.383 26.5301 12.9412 23.3333 12.9412C17.5343 12.9412 12.8333 17.6817 12.8333 23.5294C12.8333 24.7672 13.0456 25.9547 13.4326 27.0588H20.9989L24.6823 23.3444C26.6081 25.617 29.4699 27.0588 32.6667 27.0588C38.4657 27.0588 43.1667 22.3183 43.1667 16.4706C43.1667 15.2328 42.9544 14.0453 42.5674 12.9412H35.0011L31.3177 16.6556Z" fill="#3754FA" /> </g> </svg>
                        <h1 className="text-xl font-bold">
                            GetBack2
                        </h1>
                    </div>


                    <div className="">
                        <SidebarTrigger />
                    </div>
                </div>

                <SidebarGroup className="h-full">
                    <SidebarGroupContent className="flex h-full flex-col justify-between">
                        <SidebarMenu>

                            {sidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild className="rounded-sm" >
                                        <NavLink to={item.path}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                        </SidebarMenu>

                        <div className="space-y-2">
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild className="rounded-sm">
                                    <NavLink to="/setting">
                                        <CiSettings />
                                        <span>Setting</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild className="rounded-sm">
                                    <NavLink to="/help&support">
                                        <IoIosHelpCircleOutline />
                                        <span>Help & Support</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <div>
                                <PremiumCard />
                            </div>
                        </div>

                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
        </Sidebar>
    );
}