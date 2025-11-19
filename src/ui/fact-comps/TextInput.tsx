import { FormControl, OutlinedInput } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput } from "../../styles/globalStyle";

interface TextInputProps {
  el: ElementType;
}

const TextInput = ({ el, ...registerProps }: TextInputProps) => {
  const inputType = el.type?.toLowerCase() || "text";

  return (
    <FormControl variant="outlined" fullWidth key={el.id}>
      <label htmlFor={el.id as unknown as string}>{el.label}</label>

      <OutlinedInput
        required={el.required}
        id={el.id as unknown as string}
        type={inputType}
        sx={sxInput}
        {...registerProps}
        disabled={el.disabled}
      />
    </FormControl>
  );
};

export default TextInput;
