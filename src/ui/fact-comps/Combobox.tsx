import { Autocomplete, TextField } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput } from "../../styles/globalStyle";

interface ComboboxProps {
  el: ElementType;
}

const Combobox = ({ el, ...registerProps }: ComboboxProps) => {
  return (
    <Autocomplete
      disabled={el.disabled}
      className={el.className}
      sx={{
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
      }}
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
