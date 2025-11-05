import { formElements } from "../utils/Constants";
import FormElement from "./FormElement";

const FormElementsList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 overflow-x-hidden overflow-y-auto p-1">
      {formElements.map((el) => (
        <FormElement id={el.id} type={el.type!} key={el.id} />
      ))}
    </div>
  );
};

export default FormElementsList;
