import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  CreditCard,
  MessageSquare,
  Calendar,
  UserCheck,
  UserMinus,
  Headphones,
  BarChart3,
  Briefcase,
  UserPlus,
  UserX,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const recruitmentSubItems = [
  { title: "Job", url: "/recruitment/job", icon: Briefcase },
  { title: "Candidate", url: "/recruitment/candidate", icon: UserPlus },
  { title: "Termination", url: "/recruitment/termination", icon: UserX },
];
const PayrollMasterSubItems = [
  {
    title: "Payroll Type Setup",
    url: "/payroll/payrolltypesetup",
    icon: CreditCard,
  },
  { title: "Payroll Setup", url: "/payroll/payrollsetup", icon: CreditCard },
  {
    title: "Employee Pay Details",
    url: "/payroll/emppaysetup",
    icon: CreditCard,
  },
  { title: "CPF/Levy", url: "/payroll/cpf/levy", icon: CreditCard },
];

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },

  {
    title: "Recruitment",
    url: "/recruitment",
    icon: Users,
    subItems: recruitmentSubItems,
    hasSubmenu: true,
  },

  { title: "Courses", url: "/courses", icon: GraduationCap },
  {title:"Employees",url:"/employees",icon:Users},
  { title: "Template Master", url: "/templates", icon: FileText },

  {
    title: "Payroll Master",
    url: "/payroll",
    icon: Users,
    subItems: PayrollMasterSubItems,
    hasSubmenu: true,
  },
  { title: "Loan", url: "/loan", icon: MessageSquare },
  { title: "Booking", url: "/booking", icon: Calendar },
  { title: "Mailbox", url: "/mailbox", icon: MessageSquare },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Attendance", url: "/attendance", icon: UserCheck },
  { title: "Leave", url: "/leave", icon: UserMinus },
  { title: "E - Separation", url: "/separation", icon: UserMinus },
  { title: "On Boarding", url: "/onboarding", icon: UserCheck },
  { title: "LTA", url: "/lta", icon: Headphones },
];

export function AppSidebar() {
  const { state, setState } = useSidebar(); // ✅ setState added
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  const isSubmenuActive = (subItems: any[]) =>
    subItems.some((item) => currentPath === item.url);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-smooth relative",
      isActive
        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    );

  const getSubmenuCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "group flex items-center gap-3 rounded-lg px-3 py-2 ml-6 text-sm transition-smooth relative",
      isActive
        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
        : "text-sidebar-foreground/80 hover:bg-sidebar-submenu hover:text-sidebar-foreground"
    );

  return (
    <Sidebar
      className={cn(
        "border-r border-sidebar-border transition-smooth bg-gradient-sidebar",
        collapsed ? "w-14" : "w-64"
      )}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sidebar-foreground font-bold text-xl tracking-tight">
                DIGI ONE
              </span>
              <span className="text-sidebar-foreground/70 text-xs font-medium">
                HR Management
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 uppercase tracking-wider text-xs font-semibold mb-3">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const isExpanded = expandedItems.includes(item.title);
                const hasActiveSubmenu = item.subItems
                  ? isSubmenuActive(item.subItems)
                  : false;

                return (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      {item.hasSubmenu ? (
                        <div
                          className={cn(
                            getNavCls({ isActive: hasActiveSubmenu }),
                            "cursor-pointer"
                          )}
                          onClick={() => {
                            if (!collapsed) {
                              toggleExpanded(item.title);
                            }
                          }}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          {!collapsed && (
                            <>
                              <span className="truncate flex-1">
                                {item.title}
                              </span>
                              {isExpanded ? (
                                <ChevronDown className="h-4 w-4 transition-smooth" />
                              ) : (
                                <ChevronRight className="h-4 w-4 transition-smooth" />
                              )}
                            </>
                          )}
                        </div>
                      ) : (
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            end
                            className={getNavCls}
                            onClick={() => setState("collapsed")} // ✅ click pe collapse
                          >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            {!collapsed && (
                              <span className="truncate">{item.title}</span>
                            )}
                          </NavLink>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>

                    {/* Submenu Items */}
                    {item.subItems && !collapsed && isExpanded && (
                      <div className="ml-3 mt-1 space-y-1 border-l border-sidebar-border/30 pl-3">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton asChild>
                              <NavLink
                                to={subItem.url}
                                className={getSubmenuCls}
                                onClick={() => setState("collapsed")} // ✅ click pe collapse
                              >
                                <subItem.icon className="h-4 w-4 flex-shrink-0" />
                                <span className="truncate">
                                  {subItem.title}
                                </span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
