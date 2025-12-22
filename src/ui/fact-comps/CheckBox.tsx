import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxLabel, sxLabelError } from "../../styles/globalStyle";
import { useState } from "react";

interface CheckBoxProps {
  el: ElementType;
  hasError: boolean;
}

const sx = {
  color: "gray",
  "&.Mui-checked": {
    color: "black",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 28,
  },
};

const errorSx = {
  color: "red",
  "&.Mui-checked": {
    color: "red",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 28,
  },
};

const CheckBox = ({ el, hasError, ...registerProps }: CheckBoxProps) => {
  const [checked] = useState(el.checked);

  return (
    <FormControl fullWidth>
      <FormControlLabel
        sx={hasError ? sxLabelError : sxLabel}
        control={
          <Checkbox
            className={el.className}
            disabled={el.disabled}
            defaultChecked={checked}
            {...registerProps}
            sx={hasError ? errorSx : sx}
          />
        }
        label={el.label}
      />
    </FormControl>
  );
};

export default CheckBox;
