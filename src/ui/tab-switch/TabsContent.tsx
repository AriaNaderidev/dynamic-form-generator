import { useTabsContext } from "../../context/TabsContext";
import FormJson from "../Preview-form/FormJson";
import FormJsonData from "../Preview-form/FormJsonData";
import PreForm from "../Preview-form/PreForm";

const TabsContent = () => {
  const { active, setActive } = useTabsContext();

  return (
    <div className="h-full w-full rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-2 shadow-[0px_0px_3px_gray]">
      {active === "prev" ? (
        <PreForm setActive={setActive} />
      ) : active === "data" ? (
        <FormJsonData />
      ) : (
        <FormJson />
      )}
    </div>
  );
};

export default TabsContent;
