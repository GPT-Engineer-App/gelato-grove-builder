import { Home, IceCream, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: <IceCream className="h-4 w-4" />,
    page: <Menu />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
];
