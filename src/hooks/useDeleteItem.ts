import type { FormElementType } from "../types/element";

interface useDeleteItemProps {
  id: number;
  setElements: React.Dispatch<React.SetStateAction<FormElementType[]>>;
}

export const useDeleteItem = ({ id, setElements }: useDeleteItemProps) => {
  const deleteItem = (): void => {
    setElements((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    deleteItem,
  };
};
