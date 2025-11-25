import { useDroppable } from "@dnd-kit/core";
import MainElement from "./MainElement";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useFormBuilderContext } from "../../context/FormBuilderContext";
import { useEffect, useRef, useState } from "react";
import EmptyAreaText from "../empty-ui/EmptyAreaText";

const MainArea = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const { elements, setElements } = useFormBuilderContext();

  const prevLength = useRef(elements.length);
  useEffect(() => {
    if (elements.length > prevLength.current) setOpenMenuId(null);
  }, [prevLength, elements.length]);

  const { setNodeRef, isOver } = useDroppable({
    id: "main-area",
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex h-full flex-col gap-3 bg-(--primary-bg-color) p-4 ${isOver ? "animate-pulse duration-150" : ""} `}
    >
      {elements.length > 0 ? (
        <SortableContext
          items={elements}
          strategy={verticalListSortingStrategy}
        >
          {elements.map((el) => {
            return (
              <div
                key={el.id}
                className="flex items-center justify-between gap-1"
              >
                <MainElement
                  elements={elements}
                  type={el.type!}
                  id={el.id as unknown as number}
                  setElements={setElements}
                  openMenuId={openMenuId}
                  setOpenMenuId={setOpenMenuId}
                />
              </div>
            );
          })}
        </SortableContext>
      ) : (
        <EmptyAreaText />
      )}
    </div>
  );
};

export default MainArea;
