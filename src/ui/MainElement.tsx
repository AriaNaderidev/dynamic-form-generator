import { useSortable } from "@dnd-kit/sortable";
import type { FormElementType } from "../types/element";
import {
  MdDragIndicator,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";

import { HiOutlinePlus } from "react-icons/hi2";
import { useDeleteItem } from "../hooks/useDeleteItem";

type MainElementProps = {
  type: string;
  id: number;
  setElements: React.Dispatch<React.SetStateAction<FormElementType[]>>;
};

const MainElement = ({ type, id, setElements }: MainElementProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scaleX ?? 1}, ${transform.scaleY ?? 1})`
      : undefined,
    transition,
    zIndex: isDragging ? 9999 : "auto",
  };

  const { deleteItem } = useDeleteItem({ id, setElements });

  // const handleDelete = (): void => {
  //   setElements((prev) => prev.filter((item) => item.id !== id));
  // };

  const handleOpenElementsList = () => {};

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="flex w-full items-center justify-between gap-1.5 p-1"
    >
      <div
        className={`flex w-full cursor-grab items-center justify-between rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 ${isOver ? "border-sky-300" : ""} font-medium text-black`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl">
            <MdDragIndicator />
          </span>
          <span>{type?.replace(/[0-9.]/g, "") ?? ""}</span>
        </div>

        <div
          className="flex cursor-pointer items-center justify-between gap-2 text-xl"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <span className="rounded p-1 duration-200 hover:bg-stone-200">
            <MdOutlineModeEdit />
          </span>
          <span
            onClick={deleteItem}
            className="rounded p-1 duration-300 hover:bg-stone-200"
          >
            <MdOutlineDelete />
          </span>
        </div>
      </div>
      <span
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full p-1 shadow-[0px_0px_3px_gray] duration-300 hover:bg-stone-100"
        onClick={handleOpenElementsList}
      >
        <HiOutlinePlus />
      </span>
    </div>
  );
};

export default MainElement;
