import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-green-800"
          : "text-green-600 hover:text-green-800",
        className,
      )
    }
  >
    {children}
  </NavLink>
);
