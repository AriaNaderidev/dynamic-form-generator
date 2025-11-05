// import FormRenderer from "./FormRenderer";
// import sampleSchema from "../data/sample.json";
// import type { FormSchema } from "../types/form";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import Header from "./Header";
import MainArea from "./MainArea";
import SideBar from "./SideBar";
import PreShow from "./PreShow";

import { formElements } from "../utils/Constants";
import { useFormBuilder } from "../hooks/useFormBuilder";
import { FormBuilderProvider } from "../context/FormBuilderContext";

const AppLayout = () => {
  // const schema = sampleSchema as FormSchema;
  const { handleDragEnd, handleDragStart, elements, setElements, activeId } =
    useFormBuilder();

  return (
    <FormBuilderProvider value={{ elements, setElements }}>
      <div className="grid h-screen grid-cols-[10rem_1fr] grid-rows-[5rem_1fr]">
        <header className="col-start-1 -col-end-1 flex flex-col items-center justify-between border-b border-(--primary-border-color) bg-(--primary-bg-color)">
          <Header />
        </header>
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <main className="relative z-10 col-start-2 row-start-2 grid grid-cols-2 bg-(--primary-bg-color)">
            <MainArea />
            <PreShow />
          </main>
          <aside className="flex h-full items-center bg-(--primary-bg-color)">
            <SideBar />
          </aside>

          <DragOverlay>
            {activeId !== null &&
            formElements.some((el) => el.id === activeId) ? (
              <div className="z-9999 w-[100px] rounded-md bg-(--primary-bg-color) p-2 text-center text-xs font-bold shadow-[0px_0px_9px_-1px_#c9c9c9]">
                {formElements.find((formEl) => formEl.id === activeId)?.type}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </FormBuilderProvider>
  );
};

export default AppLayout;
