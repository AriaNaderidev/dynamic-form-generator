import type { JSX } from "@emotion/react/jsx-runtime";
// import {
//   FilledInput,
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
// } from "@mui/material";

// import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import TextInput from "../fact-comps/TextInput";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
import PasswordInput from "../fact-comps/PasswordInput";
import CheckBox from "../fact-comps/CheckBox";
import Select from "../fact-comps/Select";
import {
  useForm,
  type SubmitHandler,
  type UseFormRegisterReturn,
} from "react-hook-form";
import Textarea from "../fact-comps/Textarea";
import RadioGp from "../fact-comps/RadioGp";
import Combobox from "../fact-comps/Combobox";
import { buildZodSchema } from "../../utils/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import FunctionalFormButton from "../FunctionalFormButton";
import type { ElementType } from "../../types/element";
import type { Dispatch, SetStateAction } from "react";

interface PreFormProps {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

const PreForm = ({ setActive }: PreFormProps) => {
  const { elements, setFormData } = useFormBuilderContext();

  if (!elements || elements.length === 0) return null;

  return (
    <DynamicForm
      key={JSON.stringify(elements)}
      elements={elements}
      setActive={setActive}
      setFormData={setFormData}
    />
  );
};

type DynamicFormProps = {
  elements: ElementType[];
  setActive: Dispatch<SetStateAction<string | null>>;
  setFormData: (data: Record<string, unknown>) => void;
};

const DynamicForm = ({
  elements,
  setActive,
  setFormData,
}: DynamicFormProps) => {
  const schema = buildZodSchema(elements);

  const defaultValues = elements.reduce<Record<string, unknown>>((acc, el) => {
     switch (el.type) {
      case "checkbox":
        acc[el.id] = !!el.checked;
        break;
      case "text":
      case "email":
      case "tel":
      case "number":
      case "date":
      case "time":
      case "color":
      case "file":
        acc[el.id] = el.defaultValue || "";
        break;
      case "password":
        acc[el.id] = el.defaultValue || "";
        break;
      case "textarea":
        acc[el.id] = el.defaultValue || "";
        break;
      case "select":
      case "combobox":
        acc[el.id] = el.options?.at(0) || [];
        break;
      case "radiogroup":
        acc[el.id] = el.options?.at(0) || [];
        break;
    }
    return acc;
  }, {});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Record<string, unknown>>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    setActive("data");
    setFormData(data as Record<string, unknown>);
  };

  const typeToFactoryKey: Record<string, string> = {
    text: "Input",
    file: "Input",
    number: "Input",
    date: "Input",
    email: "Input",
    tel: "Input",
    time: "Input",
    color: "Input",
    password: "Password",
    checkbox: "Checkbox",
    select: "Select",
    textarea: "Textarea",
    radiogroup: "RadioGroup",
    combobox: "Combobox",
  };

  return (
    <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit(onSubmit)}>
      {elements.map((el) => {
        const hasError = Boolean(errors[el.id]);
        const elementFactory: Record<
          string,
          (props?: UseFormRegisterReturn) => JSX.Element
        > = {
          Input: (props) => (
            <TextInput el={el} {...props} hasError={hasError} />
          ),
          Password: (props) => (
            <PasswordInput el={el} {...props} hasError={hasError} />
          ),
          Checkbox: (props) => (
            <CheckBox el={el} {...props} hasError={hasError} />
          ),
          Select: () => (
            <Select el={el} control={control} hasError={hasError} />
          ),
          Textarea: (props) => (
            <Textarea el={el} {...props} hasError={hasError} />
          ),
          RadioGroup: (props) => <RadioGp el={el} {...props} />,
          Combobox: (props) => (
            <Combobox el={el} {...props} hasError={hasError} />
          ),
        };

        const factoryKey = typeToFactoryKey[el.type] ?? el.type;

        const factory = elementFactory[factoryKey];

        return (
          <div key={`${el.id}_${el.type}`} className="flex flex-col gap-1">
            {factory(
              factoryKey === "select" ? undefined : { ...register(el.id) },
            )}
            {hasError && (
              <p className="w-max rounded bg-red-100 p-1 text-red-400">
                {errors[el.id]?.message}
              </p>
            )}
          </div>
        );
      })}
      <FunctionalFormButton resetText="Clear" submitText="Submit" />
    </form>
  );
};

export default PreForm;
