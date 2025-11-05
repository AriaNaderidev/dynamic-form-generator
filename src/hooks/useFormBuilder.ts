import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";
import { getUniqueRandomNumber } from "../utils/helpers";
import type { FormElementType } from "../types/element";
import { formElements } from "../utils/Constants";
import { arrayMove } from "@dnd-kit/sortable";

export const useFormBuilder = () => {
  const [elements, setElements] = useState<FormElementType[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleDragStart = (event: DragStartEvent) =>
    setActiveId(event.active.id as number);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    const newFormEl: FormElementType = {
      id: (active.id as number) + getUniqueRandomNumber(),
      type: formElements.find((formEl) => formEl.id === active.id)?.type,
    };

    if (
      over &&
      over?.id === "main-area" &&
      !elements.some((el) => el.id === active.id)
    ) {
      setElements((prev) => [...prev, newFormEl]);
    }

    if (over && over.id !== "main-area") {
      setElements((prev) => {
        const oldIndex = prev.findIndex((el) => el.id === active.id);
        const newIndex = prev.findIndex((el) => el.id === over?.id);
        if (oldIndex === -1 || newIndex === -1) return prev;

        return arrayMove(prev, oldIndex, newIndex);
      });
    }

    // setActiveId(null);
  };

  return {
    handleDragEnd,
    handleDragStart,
    elements,
    setElements,
    activeId,
  };
};
