import { useState } from "react";
import TabsContent from "./TabsContent";
import TabsList from "./TabsList";
import { TabsProvider } from "../context/TabsContext";
import { useFormBuilderContext } from "../context/FormBuilderContext";
import DropZoneArea from "./DropZoneArea";

const PreShow = () => {
  const [active, setActive] = useState<string | null>("prev");
  const { elements } = useFormBuilderContext();

  return (
    <TabsProvider value={{ active, setActive }}>
      <div className="flex flex-col items-center justify-between gap-2 p-2">
        {elements.length > 0 ? (
          <>
            <TabsList />
            <TabsContent />
          </>
        ) : (
          <DropZoneArea />
        )}
      </div>
    </TabsProvider>
  );
};

export default PreShow;
