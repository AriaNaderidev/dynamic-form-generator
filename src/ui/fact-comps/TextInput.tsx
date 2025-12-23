import { FormControl, OutlinedInput } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput, sxInputError } from "../../styles/globalStyle";

type TextInputProps = {
  el: ElementType;
  hasError: boolean;
};

const TextInput = ({ el, hasError, ...registerProps }: TextInputProps) => {
  const inputType = el.type?.toLowerCase() || "text";

  return (
    <FormControl variant="outlined" fullWidth key={el.id}>
      <label
        htmlFor={el.id as unknown as string}
        className={`${hasError ? "text-red-300" : ""}`}
      >
        {el.label}
      </label>

      <OutlinedInput
        className={el.className}
        id={el.id as unknown as string}
        type={inputType}
        sx={hasError ? sxInputError : sxInput}
        {...registerProps}
        disabled={el.disabled}
      />
    </FormControl>
  );
};

export default TextInput;
