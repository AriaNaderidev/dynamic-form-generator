import { FormControl, TextField } from "@mui/material";
import type { ElementType } from "../../types/element";

interface TextInputProps {
  el: ElementType;
}

const Textarea = ({ el, ...registerProps }: TextInputProps) => {
  return (
    <FormControl variant="outlined" fullWidth key={el.id}>
      <label htmlFor={el.id as unknown as string}>{el.label}</label>
      <TextField
        disabled={el.disabled}
        className={el.className}
        id={el.id as unknown as string}
        multiline
        rows={3}
        sx={{
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
            transition: "all 0.2s ease-in-out",
          },

          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
              transition: "all 0.2s ease-in-out",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
              transition: "all 0.2s ease-in-out",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
              transition: "all 0.2s ease-in-out",
            },
          },
        }}
        {...registerProps}
      />
    </FormControl>
  );
};

export default Textarea;
