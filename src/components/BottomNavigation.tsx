import React from "react";
import Icon from "@/components/ui/icon";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const navItems: NavItem[] = [
    { id: "catalog", label: "Каталог", icon: "RadioReceiver" },
    { id: "music", label: "Музыка", icon: "Music" },
    { id: "store", label: "Купить", icon: "ShoppingCart" },
    { id: "news", label: "Новости", icon: "Newspaper" },
    { id: "about", label: "Об игре", icon: "Info" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center p-2 min-w-0 flex-1 ${
              activeTab === item.id ? "text-orange-400" : "text-gray-500"
            }`}
          >
            <Icon
              name={item.icon as any}
              size={20}
              className={
                activeTab === item.id ? "text-orange-400" : "text-gray-500"
              }
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
