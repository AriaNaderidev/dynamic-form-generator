import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  type SelectChangeEvent,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { useState } from "react";
import { sxInput, sxLabel } from "../../styles/globalStyle";

interface SelectProps {
  el: ElementType;
}

const Select = ({ el }: SelectProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={(el.id as unknown as string) + "label"} sx={sxLabel}>
        {el.label}
      </InputLabel>
      <MuiSelect
        name={el.name}
        required={el.required}
        sx={sxInput}
        labelId={(el.id as unknown as string) + "label"}
        id={el.id as unknown as string}
        value={age}
        label="Age"
        onChange={handleChange}
      >
        {el.options?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.option}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
