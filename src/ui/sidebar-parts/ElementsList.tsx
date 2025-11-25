import { elementsObj } from "../../utils/Constants";
import Elements from "./Elements";

const ElementsList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 overflow-y-auto">
      {elementsObj.map((el) => (
        <Elements id={el.id as unknown as number} name={el.name} key={el.id} />
      ))}
    </div>
  );
};

export default ElementsList;
