import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { sxLabel } from "../../styles/globalStyle";

interface RadioGpProps {
  el: ElementType;
}

const RadioGp = ({ el, ...registerProps }: RadioGpProps) => {
  return (
    <FormControl>
      <FormLabel id={el.id} sx={sxLabel}>
        {el.label}
      </FormLabel>
      <RadioGroup
        aria-labelledby={el.id}
        defaultValue={el.options?.[0]?.value ?? ""}
        name="radio-buttons-group"
      >
        {el.options?.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={
              <Radio
                className={el.className}
                disabled={el.disabled}
                {...registerProps}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "black",
                    transition: "all 0.2s ease-in-out",
                  },
                  "&:hover": {
                    color: "black",
                    transition: "all 0.2s ease-in-out",
                  },
                  "&.Mui-focusVisible": {
                    color: "black",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              />
            }
            label={item.option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGp;
