import {
  createContext,
  createElement,
  useContext,
  type ReactNode,
} from "react";

type TabsContextType = {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
};

export const TabsContext = createContext<TabsContextType | undefined>(
  undefined,
);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("useTabsContext must be used within a TabsProvider");

  return context;
};

type TabsProviderProps = {
  children: ReactNode;
  value: TabsContextType;
};

export const TabsProvider = ({ children, value }: TabsProviderProps) =>
  createElement(TabsContext.Provider, { value }, children);
