import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      id: "catalog",
      label: "Каталог",
      icon: "RadioReceiver",
      path: "/records",
    },
    { id: "music", label: "Музыка", icon: "Music", path: "/music" },
    { id: "store", label: "Купить", icon: "ShoppingCart", path: "/" },
    { id: "news", label: "Новости", icon: "Newspaper", path: "/" },
    { id: "about", label: "Об игре", icon: "Info", path: "/" },
  ];

  const handleNavigation = (item: NavItem) => {
    if (item.id === "catalog" || item.id === "music") {
      navigate(item.path);
    } else {
      onTabChange(item.id);
      if (location.pathname !== "/") {
        navigate("/");
      }
    }
  };

  const isActive = (item: NavItem) => {
    if (item.id === "catalog" && location.pathname === "/records") return true;
    if (item.id === "music" && location.pathname === "/music") return true;
    return location.pathname === "/" && activeTab === item.id;
  };

  return (
    <nav className="bg-gray-900 border-t border-gray-700 mt-auto">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`flex flex-col items-center p-2 min-w-0 flex-1 ${
              isActive(item) ? "text-orange-400" : "text-gray-500"
            }`}
          >
            <Icon
              name={item.icon as any}
              size={20}
              className={isActive(item) ? "text-orange-400" : "text-gray-500"}
            />
            <span className="text-xs mt-1 font-open-sans truncate">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
