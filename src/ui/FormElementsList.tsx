import type { FormElementType } from "../types/element";

import FormElement from "./FormElement";

const formElements: FormElementType[] = [
  { type: "Label" },
  { type: "Text" },
  { type: "Number" },
  { type: "Checkbox" },
  { type: "Select" },
  { type: "Button" },
  { type: "Color" },
  { type: "Range" },
  { type: "Date" },
  { type: "Email" },
  { type: "Image" },
  { type: "Password" },
  { type: "Radio" },
  { type: "Search" },
  { type: "Tel" },
  { type: "Time" },
  { type: "Url" },
  { type: "week" },
];

const FormElementsList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center p-1">
      <fieldset className="flex w-[90%] flex-col items-center rounded border-2 border-white p-2">
        <legend className="p-1 text-center font-bold text-white">Inputs</legend>

        {/* {formElements.map((el) => (
            if(el.type == )
          <FormElement type={el.type} key={el.type} />
        ))} */}
      </fieldset>
      <fieldset className="flex w-[90%] flex-col items-center rounded border-2 border-white p-2">
        <legend className="p-1 text-center font-bold text-white">Inputs</legend>

        {formElements.map((el) => (
          <FormElement type={el.type} key={el.type} />
        ))}
      </fieldset>
    </div>
  );
};

export default FormElementsList;
