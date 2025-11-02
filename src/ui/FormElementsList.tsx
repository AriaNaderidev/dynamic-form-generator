import type { FormElementType } from "../types/element";
import FormElement from "./FormElement";

const formElements: FormElementType = {
  els: [
    "Checkbox",
    "Date Picker",
    "File Input",
    "Input",
    "Password",
    "Select",
    "Password",
    "Textarea",
    "RadioGroup",
    "Button",
  ],
};

const FormElementsList = () => {
  return (
    <div className="flex h-[90%] w-[95%] flex-col items-center gap-3 overflow-y-scroll p-1">
      {formElements.els.map((el) => (
        <FormElement type={el} key={el} />
      ))}
    </div>
  );
};

export default FormElementsList;
