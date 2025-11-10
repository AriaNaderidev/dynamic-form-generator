import type { ReactNode } from "react";
import { useTabsContext } from "../context/TabsContext";

interface TabProps {
  children: ReactNode;
  ariaLabel: string;
}

const Tab = ({ children, ariaLabel }: TabProps) => {
  const { active, setActive } = useTabsContext();

  const handleActivision = (e: React.MouseEvent<HTMLSpanElement>) => {
    const label = e.currentTarget.getAttribute("aria-label");
    setActive(label);
  };

  return (
    <span
      aria-label={ariaLabel}
      onClick={handleActivision}
      className={`w-[50%] cursor-pointer rounded-sm ${active === ariaLabel ? "bg-(--primary-bg-color) text-black shadow-[0px_0px_3px_gray]" : ""} p-1 text-center`}
    >
      {children}
    </span>
  );
};

export default Tab;
