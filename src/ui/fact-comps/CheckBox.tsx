import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxLabel, sxLabelError } from "../../styles/globalStyle";

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
  return (
    <FormControl fullWidth>
      <FormControlLabel
        sx={hasError ? sxLabelError : sxLabel}
        control={
          <Checkbox
            className={el.className}
            {...registerProps}
            defaultChecked={el.checked}
            disabled={el.disabled}
            sx={hasError ? errorSx : sx}
          />
        }
        label={el.label}
      />
    </FormControl>
  );
};

export default CheckBox;
