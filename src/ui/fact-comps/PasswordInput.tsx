import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { usePasswordAnimation } from "../../hooks/usePasswordAnimation";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { sxInput, sxLabel } from "../../styles/globalStyle";

interface PasswordInputProps {
  el: ElementType;
}

const PasswordInput = ({ el, ...registerProps }: PasswordInputProps) => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
  } = usePasswordAnimation();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={el.id as unknown as string} sx={sxLabel}>
        {el.label}
      </InputLabel>
      <OutlinedInput
        {...registerProps}
        required={el.required}
        sx={sxInput}
        id={el.id as unknown as string}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
          </InputAdornment>
        }
        label={el.label}
      />
    </FormControl>
  );
};

export default PasswordInput;
