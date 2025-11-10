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

const PreForm = () => {
  const { elements } = useFormBuilderContext();

  if (!elements || elements.length === 0) return null;

  return (
    <form className="flex flex-col gap-3 p-2">
      {elements.map((el) => {
        const elementFactory: Record<
          string,
          () => JSX.Element | JSX.Element[]
        > = {
          Input: () => <TextInput el={el} />,
          Password: () => <PasswordInput el={el} />,
          Checkbox: () => <CheckBox el={el} />,
          Select: () => <Select el={el} />,
        };

        const factory = elementFactory[el.type as string];
        if (!factory) return null;

        return <div key={el.id}>{factory()}</div>;
      })}
      <SubmitButton />
    </form>
  );
};

export default PreForm;
