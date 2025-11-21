import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { usePasswordAnimation } from "../../hooks/usePasswordAnimation";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { sxInput } from "../../styles/globalStyle";

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
      <label htmlFor={el.id as unknown as string}>{el.label}</label>
      <OutlinedInput
        {...registerProps}
        disabled={el.disabled}
        className={el.className}
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
      />
    </FormControl>
  );
};

export default PasswordInput;
