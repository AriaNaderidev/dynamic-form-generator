import { Autocomplete, TextField } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput } from "../../styles/globalStyle";

type ComboboxProps = {
  el: ElementType;
  hasError: boolean;
};

const sx = {
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
};

const errorSx = {
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
  "& .MuiInputLabel-root": {
    color: "red",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "red",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "red",
  },
};

const Combobox = ({ el, hasError, ...registerProps }: ComboboxProps) => {
  return (
    <Autocomplete
      disabled={el.disabled}
      className={el.className}
      sx={hasError ? errorSx : sx}
      disablePortal
      fullWidth
      options={el.options || []}
      getOptionLabel={(option) => option.value as string}
      renderInput={(params) => (
        <TextField
          {...params}
          {...registerProps}
          sx={sxInput}
          label={el.label || "Select an option"}
        />
      )}
    />
  );
};

export default Combobox;
