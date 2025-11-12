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
        };

        const factory = elementFactory[el.type as string];
        if (!factory) return null;

        return <div key={el.id}>{factory({ ...register(el.id) })}</div>;
      })}
      <SubmitButton />
    </form>
  );
};

export default PreForm;
