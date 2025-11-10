import { elementsObj } from "../utils/Constants";
import Elements from "./Elements";

const ElementsList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 overflow-x-hidden overflow-y-auto p-1">
      {elementsObj.map((el) => (
        <Elements id={el.id} type={el.type!} key={el.id} />
      ))}
    </div>
  );
};

export default ElementsList;
