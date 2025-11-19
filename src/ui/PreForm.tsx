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
import SubmitButton from "./SubmitButton";
import TextInput from "./fact-comps/TextInput";
import { useFormBuilderContext } from "../context/FormBuilderContext";
import PasswordInput from "./fact-comps/PasswordInput";
import CheckBox from "./fact-comps/CheckBox";
import Select from "./fact-comps/Select";
import {
  useForm,
  type SubmitHandler,
  type UseFormRegisterReturn,
} from "react-hook-form";
import Textarea from "./fact-comps/Textarea";
import RadioGp from "./fact-comps/RadioGp";
import Combobox from "./fact-comps/Combobox";

interface PreFormProps {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

const PreForm = ({ setActive }: PreFormProps) => {
  const { elements, setFormData } = useFormBuilderContext();

  const { register, handleSubmit, control } =
    useForm<Record<string, unknown>>();

  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    setActive("data");
    setFormData(data as Record<string, unknown>);
  };

  if (!elements || elements.length === 0) return null;

  const typeToFactoryKey: Record<string, string> = {
    text: "Input",
    file: "Input",
    number: "Input",
    date: "Input",
    email: "Input",
    tel: "Input",
    time: "Input",
    color: "Input",
    Password: "Password",
    Checkbox: "Checkbox",
    Select: "Select",
    Textarea: "Textarea",
    RadioGroup: "RadioGroup",
    Combobox: "Combobox",
  };

  return (
    <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit(onSubmit)}>
      {elements.map((el) => {
        const elementFactory: Record<
          string,
          (props: UseFormRegisterReturn) => JSX.Element | JSX.Element[]
        > = {
          Input: (props) => <TextInput el={el} {...props} />,
          Password: (props) => <PasswordInput el={el} {...props} />,
          Checkbox: (props) => <CheckBox el={el} {...props} />,
          Select: () => <Select el={el} control={control} />,
          Textarea: (props) => <Textarea el={el} {...props} />,
          RadioGroup: (props) => <RadioGp el={el} {...props} />,
          Combobox: (props) => <Combobox el={el} {...props} />,
        };

        const factoryKey = typeToFactoryKey[el.type] ?? el.type;

        const factory = elementFactory[factoryKey];

        if (!factory) return null;

        return (
          <div key={`${el.id}_${el.type}`}>
            {factory({ ...register(el.id) })}
          </div>
        );
      })}
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default PreForm;
