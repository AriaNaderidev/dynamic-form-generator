import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput, sxLabel } from "../../styles/globalStyle";

interface TextInputProps {
  el: ElementType;
}

const TextInput = ({ el, ...registerProps }: TextInputProps) => {
  return (
    <FormControl variant="outlined" fullWidth key={el.id}>
      <InputLabel htmlFor={el.id as unknown as string} sx={sxLabel}>
        {el.label}
      </InputLabel>
      <OutlinedInput
        required={el.required}
        id={el.id as unknown as string}
        type={el.type?.replace(" ", "")}
        label={el.label}
        sx={sxInput}
        {...registerProps}
      />
    </FormControl>
  );
};

export default TextInput;
