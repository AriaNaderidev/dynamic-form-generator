import { useTabsContext } from "../context/TabsContext";
import JsonCodeBox from "./JsonCodeBox";
import PreForm from "./PreForm";

const TabsContent = () => {
  const { active } = useTabsContext();

  return (
    <div className="h-full w-full rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 shadow-[0px_0px_3px_gray]">
      {active === "prev" ? <PreForm /> : <JsonCodeBox />}
    </div>
  );
};

export default TabsContent;
