import { FormControl, TextField } from "@mui/material";
import type { ElementType } from "../../types/element";

interface TextInputProps {
  el: ElementType;
  hasError: boolean;
}

const sx = {
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
};

const errorSx = {
  "& .MuiInputLabel-root": {
    color: "red",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "red",
    transition: "all 0.2s ease-in-out",
  },

  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
      transition: "all 0.2s ease-in-out",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
      transition: "all 0.2s ease-in-out",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
      transition: "all 0.2s ease-in-out",
    },
  },
};

const Textarea = ({ el, hasError, ...registerProps }: TextInputProps) => {
  return (
    <FormControl variant="outlined" fullWidth key={el.id}>
      <label htmlFor={el.id as unknown as string}>{el.label}</label>
      <TextField
        disabled={el.disabled}
        className={el.className}
        id={el.id as unknown as string}
        multiline
        rows={3}
        sx={hasError ? errorSx : sx}
        {...registerProps}
      />
    </FormControl>
  );
};

export default Textarea;
