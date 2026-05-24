import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

interface SidebarNavItemProps {
  item: {
    path: string;

    icon: any;

    label: string;
  };

  isCollapsed: boolean;

  onClick?: () => void;

  end?: boolean;
}

export function SidebarNavItem({
  item,
  isCollapsed,
  onClick,
  end,
}: SidebarNavItemProps) {
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      end={end}
      className={({ isActive }) =>
        cn(
          "group relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-300",

          isActive
            ? "bg-primary/12 text-primary shadow-sm ring-1 ring-primary/15"
            : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",

          isCollapsed && "justify-center px-2",
        )
      }
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator */}
          {isActive && (
            <div className="absolute left-0 top-2 h-8 w-1 rounded-r-full bg-primary" />
          )}

          <item.icon
            className={cn(
              "h-5 w-5 shrink-0 transition-transform duration-300",

              !isActive && "group-hover:scale-110",
            )}
          />

          {!isCollapsed && <span className="truncate">{item.label}</span>}
        </>
      )}
    </NavLink>
  );
}
