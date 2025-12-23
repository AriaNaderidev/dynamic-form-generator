import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import type { ElementType } from "../../types/element";
import { usePasswordAnimation } from "../../hooks/usePasswordAnimation";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { sxInput, sxInputError } from "../../styles/globalStyle";

type PasswordInputProps = {
  el: ElementType;
  hasError: boolean;
};

const PasswordInput = ({
  el,
  hasError,
  ...registerProps
}: PasswordInputProps) => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
  } = usePasswordAnimation();

  return (
    <FormControl fullWidth variant="outlined">
      <label
        htmlFor={el.id as unknown as string}
        className={`${hasError ? "text-red-300" : ""}`}
      >
        {el.label}
      </label>
      <OutlinedInput
        {...registerProps}
        disabled={el.disabled}
        className={el.className}
        sx={hasError ? sxInputError : sxInput}
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
