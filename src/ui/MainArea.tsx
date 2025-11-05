import { useDroppable } from "@dnd-kit/core";
import MainElement from "./MainElement";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useFormBuilderContext } from "../context/FormBuilderContext";

const MainArea = () => {
  const { elements, setElements } = useFormBuilderContext();

  const { setNodeRef, isOver } = useDroppable({
    id: "main-area",
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex h-full flex-col gap-3 border-r border-(--primary-border-color) bg-(--primary-bg-color) p-6 ${isOver ? "animate-pulse duration-150" : ""} `}
    >
      <SortableContext items={elements} strategy={verticalListSortingStrategy}>
        {elements.map((el) => (
          <MainElement
            key={el.id}
            type={el.type!}
            id={el.id}
            setElements={setElements}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default MainArea;
