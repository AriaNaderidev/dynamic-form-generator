import { getUniqueRandomNumber } from "../utils/helpers";
import type { ElementType } from "../types/element";
import { elementsObj } from "../utils/Constants";

type DropdownMenuProps = {
  setElements: React.Dispatch<React.SetStateAction<ElementType[]>>;
};

const DropdownMenu = ({ setElements }: DropdownMenuProps) => {
  const handleAddElement = (el: ElementType): void => {
    const sourceEl = elementsObj.find((formEl) => formEl.id === el.id)!;
    const newItem: ElementType = {
      id: `${(el.id as unknown as number) + getUniqueRandomNumber() + "plus"}`,
      name: sourceEl.name,
      type: sourceEl.type,
      label: sourceEl.label ?? "",
      options: sourceEl.options ?? [],
      checked: sourceEl.checked ?? false,
      validation: sourceEl.validation ?? {},
      className: sourceEl.className ?? "",
      disabled: sourceEl.disabled ?? false,
      defaultValue: sourceEl.defaultValue ?? "",
      // source: "plus",
    };

    setElements((prev) => [...prev, newItem]);
  };

  return (
    <div className="absolute top-11 -right-18 z-9999 max-h-[200px] w-[150px] overflow-y-auto rounded-md border border-(--primary-border-color) bg-(--primary-bg-color) p-1">
      <span className="h-[20%] w-full space-y-1 text-center">
        <h1 className="font-sans text-[1.1rem] font-medium">Components</h1>
        <hr className="w-full text-(--primary-border-color)" />
      </span>
      <div className="space-y-2 p-1 font-sans">
        {elementsObj.map((el) => (
          <div
            onClick={() => handleAddElement(el)}
            className="cursor-pointer rounded p-1 duration-300 hover:bg-stone-200"
            key={el.id}
          >
            {el.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
