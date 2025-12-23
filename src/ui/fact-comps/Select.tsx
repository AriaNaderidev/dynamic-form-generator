import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { Controller, type Control } from "react-hook-form";
import type { ElementType } from "../../types/element";
import {
  sxInput,
  sxInputError,
  sxLabel,
  sxLabelError,
} from "../../styles/globalStyle";

type SelectProps = {
  el: ElementType;
  control: Control<Record<string, unknown>>;
  hasError: boolean;
};

const Select = ({ el, hasError, control }: SelectProps) => {
  return (
    <Controller
      defaultValue={el.defaultValue ?? ""}
      name={el.id}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel
            id={el.id + "_label"}
            sx={hasError ? sxLabelError : sxLabel}
          >
            {el.label}
          </InputLabel>

          <MuiSelect
            labelId={el.id + "_label"}
            id={el.id}
            label={el.label}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value ?? "")}
            onBlur={field.onBlur}
            sx={hasError ? sxInputError : sxInput}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

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
