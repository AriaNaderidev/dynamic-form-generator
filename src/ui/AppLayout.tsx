// import FormRenderer from "./FormRenderer";
// import sampleSchema from "../data/sample.json";
// import type { FormSchema } from "../types/form";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import MainArea from "./MainArea";
import SideBar from "./SideBar";
import PreShow from "./PreShow";

import { elementsObj } from "../utils/Constants";
import { useFormBuilder } from "../hooks/useFormBuilder";
import { FormBuilderProvider } from "../context/FormBuilderContext";
import { useState } from "react";

const AppLayout = () => {
  // const schema = sampleSchema as FormSchema;
  const { handleDragEnd, handleDragStart, elements, setElements, activeId } =
    useFormBuilder();

  const [formData, setFormData] = useState<Record<string, unknown>>({});

  return (
    <FormBuilderProvider
      value={{ elements, setElements, formData, setFormData }}
    >
      <div className="grid h-screen grid-cols-[10rem_1fr] grid-rows-1">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <main className="relative z-10 col-start-2 row-start-1 grid grid-cols-2 space-x-[10%] overflow-y-auto bg-(--primary-bg-color)">
            <MainArea />
            <PreShow />
          </main>
          <aside className="flex h-full items-center bg-(--primary-bg-color)">
            <SideBar />
          </aside>

          <DragOverlay>
            {activeId !== null &&
            elementsObj.some(
              (el) => (el.id as unknown as number) === activeId,
            ) ? (
              <div className="z-9999 w-[100px] rounded-md bg-(--primary-bg-color) p-2 text-center text-xs font-bold shadow-[0px_0px_9px_-1px_#c9c9c9]">
                {
                  elementsObj.find(
                    (formEl) => (formEl.id as unknown as number) === activeId,
                  )?.type
                }
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </FormBuilderProvider>
  );
};

export default AppLayout;
