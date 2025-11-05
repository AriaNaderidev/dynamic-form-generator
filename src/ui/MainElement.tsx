import { useSortable } from "@dnd-kit/sortable";
import type { FormElementType } from "../types/element";
import {
  MdDragIndicator,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";

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

  const handleDelete = () => {
    setElements((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between rounded-md border border-(--primary-border-color) bg-white p-2 font-medium text-black ${isOver ? "border-blue-500" : ""}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="cursor-grab text-xl" {...listeners}>
          <MdDragIndicator />
        </span>
        <span>{type?.replace(/[0-9.]/g, "") ?? ""}</span>
      </div>

      <div className="flex cursor-pointer items-center justify-between gap-2 text-xl">
        <span>
          <MdOutlineModeEdit />
        </span>
        <span onClick={handleDelete}>
          <MdOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default MainElement;
