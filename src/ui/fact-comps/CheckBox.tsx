import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import type { ElementType } from "../../types/element";

interface CheckBoxProps {
  el: ElementType;
}

const CheckBox = ({ el }: CheckBoxProps) => {
  return (
    <FormControl fullWidth>
      <FormControlLabel
        control={
          <Checkbox
            name={el.name}
            defaultChecked={el.checked}
            required={el.required}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "black",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
        }
        label={el.label}
      />
    </FormControl>
  );
};

export default CheckBox;
