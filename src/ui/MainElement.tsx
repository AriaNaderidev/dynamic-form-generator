import { useSortable } from "@dnd-kit/sortable";
import type { ElementType } from "../types/element";
import {
  MdDragIndicator,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";

import { useDeleteItem } from "../hooks/useDeleteItem";
import { HiOutlinePlus } from "react-icons/hi2";

import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import EditElementForm from "./EditElementForm";

interface MainElementProps {
  type: string;
  id: number;
  setElements: React.Dispatch<React.SetStateAction<ElementType[]>>;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;
  openMenuId: number | null;
  elements: ElementType[];
}

const MainElement = ({
  type,
  id,
  setElements,
  setOpenMenuId,
  openMenuId,
  elements,
}: MainElementProps) => {
  const {
    attributes,
    listeners,
    setNodeRef: setNodeRefEl,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  console.log(elements);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scaleX ?? 1}, ${transform.scaleY ?? 1})`
      : undefined,
    transition,
    zIndex: isDragging ? 9999 : "auto",
  };

  const isMenuOpen = openMenuId === id;
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleToggleMenu = () => {
    setOpenMenuId(isMenuOpen ? null : id);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const plusButton = document.getElementById(`plus-${id}`);

      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        plusButton &&
        !plusButton.contains(e.target as Node)
      )
        setOpenMenuId(null);
    };

    if (isMenuOpen) document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef, isMenuOpen, setOpenMenuId, id]);

  const { deleteItem } = useDeleteItem({ id, setElements });

  // const fg = elements.some((el) => el.id.includes("plus"));
  const ce = elements.find((el) => el.id.includes("plus"));

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRefEl}
      style={style}
      className="relative flex w-full items-center justify-between gap-2"
    >
      {/* {ce ? (
        <div className="flex items-center justify-between bg-red-300">
          <div
            className={`flex w-full cursor-grab items-center justify-between rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 font-medium text-black duration-100 active:border-sky-200`}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-xl">
                <MdDragIndicator />
              </span>
              <span>{type?.replace(/[0-9.]/g, "") ?? ""}</span>
            </div>

            <div
              className="flex cursor-pointer items-center justify-between text-xl"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span className="rounded p-1 duration-300 hover:bg-stone-200">
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
          <div
            className={`flex w-full cursor-grab items-center justify-between rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 font-medium text-black duration-100 active:border-sky-200`}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-xl">
                <MdDragIndicator />
              </span>
              <span>{ce.type?.replace(/[0-9.]/g, "") ?? ""}</span>
            </div>

            <div
              className="flex cursor-pointer items-center justify-between text-xl"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span className="rounded p-1 duration-300 hover:bg-stone-200">
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
        </div>
      ) : ( */}
      <div
        className={`${ce ? "flex" : ""} h-full w-full items-center justify-between`}
      >
        {`${id}`.includes("plus") || (
          <div
            className={`flex w-full cursor-grab items-center justify-between rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 font-medium text-black duration-100 active:border-sky-200`}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-xl">
                <MdDragIndicator />
              </span>
              <span>{type?.replace(/[0-9.]/g, "") ?? ""}</span>
            </div>

            <div
              className="flex cursor-pointer items-center justify-between text-xl"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span
                className="rounded p-1 duration-300 hover:bg-stone-200"
                onClick={() => setIsEditOpen(true)}
              >
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
        )}
        {ce ? (
          <div
            className={`flex w-full cursor-grab items-center justify-between rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 font-medium text-black duration-100 active:border-sky-200`}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-xl">
                <MdDragIndicator />
              </span>
              <span>{ce.type?.replace(/[0-9.]/g, "") ?? ""}</span>
            </div>

            <div
              className="flex cursor-pointer items-center justify-between text-xl"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span className="rounded p-1 duration-300 hover:bg-stone-200">
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
        ) : null}
      </div>
      {/* )} */}

      <div onPointerDown={(e) => e.stopPropagation()}>
        <span
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full p-1 shadow-[0px_0px_3px_gray] duration-300 hover:bg-stone-100"
          onClick={handleToggleMenu}
          id={`plus-${id}`}
        >
          <HiOutlinePlus />
        </span>
        {isMenuOpen && (
          <div ref={menuRef}>
            <DropdownMenu setElements={setElements} />
          </div>
        )}
      </div>

      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <EditElementForm id={id} onClose={() => setIsEditOpen(false)} />
      </Modal>
    </div>
  );
};

export default MainElement;
