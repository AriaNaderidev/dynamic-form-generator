import {
  createContext,
  useContext,
  createElement,
  type ReactNode,
} from "react";
import type { FormElementType } from "../types/element";

interface FormBuilderContextType {
  elements: FormElementType[];
  setElements: React.Dispatch<React.SetStateAction<FormElementType[]>>;
}

export const FormBuilderContext = createContext<
  FormBuilderContextType | undefined
>(undefined);

export const useFormBuilderContext = () => {
  const context = useContext(FormBuilderContext);
  if (!context)
    throw new Error(
      "useFormBuilderContext must be used within a FormBuilderProvider",
    );

  return context;
};

interface ProviderProps {
  children: ReactNode;
  value: FormBuilderContextType;
}

export const FormBuilderProvider = ({ children, value }: ProviderProps) =>
  createElement(FormBuilderContext.Provider, { value }, children);
