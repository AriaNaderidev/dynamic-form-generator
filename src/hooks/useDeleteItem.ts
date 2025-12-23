import type { ElementType } from "../types/element";

type useDeleteItemProps = {
  id: number;
  setElements: React.Dispatch<React.SetStateAction<ElementType[]>>;
};

export const useDeleteItem = ({ id, setElements }: useDeleteItemProps) => {
  const deleteItem = (): void => {
    setElements((prev) =>
      prev.filter((item) => (item.id as unknown as number) !== id),
    );
  };

  return {
    deleteItem,
  };
};
