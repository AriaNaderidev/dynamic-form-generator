import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxInput, sxLabel } from "../../styles/globalStyle";
import { Controller, type Control } from "react-hook-form";

interface SelectProps {
  el: ElementType;
  control: Control<Record<string, unknown>>;
}

const Select = ({ el, control }: SelectProps) => {
  return (
    <Controller
      name={el.id}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={el.id + "label"} sx={sxLabel}>
            {el.label}
          </InputLabel>
          <MuiSelect
            sx={sxInput}
            {...field}
            labelId={el.id + "label"}
            id={el.id}
            label={el.label}
          >
            {el.options?.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.option}
              </MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      )}
    />
  );
};
export default Select;
