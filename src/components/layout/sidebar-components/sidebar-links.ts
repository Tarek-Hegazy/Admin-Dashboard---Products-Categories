import {
  LayoutDashboard,
  Package,
  FolderTree,
  Settings,
  HelpCircle,
} from "lucide-react";

export const navItems = [
  {
    path: "/",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    path: "/products",
    icon: Package,
    label: "Products",
  },

  {
    path: "/categories",
    icon: FolderTree,
    label: "Categories",
  },
];

export const bottomNavItems = [
  {
    path: "/settings",
    icon: Settings,
    label: "Settings",
  },

  {
    path: "/help",
    icon: HelpCircle,
    label: "Help & Support",
  },
];
