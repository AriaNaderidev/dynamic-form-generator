// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select as MuiSelect,
// } from "@mui/material";
// import type { ElementType } from "../../types/element";
// import { sxInput, sxLabel } from "../../styles/globalStyle";
// import { Controller, type Control } from "react-hook-form";

// interface SelectProps {
//   el: ElementType;
//   control: Control<Record<string, unknown>>;
// }

// const Select = ({ el, control }: SelectProps) => {
//   return (
//     <Controller
//       name={el.id}
//       control={control}
//       render={({ field }) => (
//         <FormControl fullWidth>
//           <InputLabel id={el.id + "label"} sx={sxLabel}>
//             {el.label}
//           </InputLabel>
//           <MuiSelect
//             {...field}
//             value={field.value === undefined ? "" : field.value}
//             onChange={(e) => {
//               const v = e.target.value;
//               field.onChange(v ?? "");
//             }}
//             displayEmpty
//             className={el.className}
//             disabled={el.disabled}
//             sx={sxInput}
//             labelId={el.id + "label"}
//             label={el.label}
//             id={el.id}
//           >
//             {el.options?.map((item) => (
//               <MenuItem key={item.value} value={item.value}>
//                 {item.option}
//               </MenuItem>
//             ))}
//           </MuiSelect>
//         </FormControl>
//       )}
//     />
//   );
// };
// export default Select;

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { Controller, type Control } from "react-hook-form";
import type { ElementType } from "../../types/element";

interface SelectProps {
  el: ElementType;
  control: Control<Record<string, unknown>>;
}

const Select = ({ el, control }: SelectProps) => {
  return (
    <Controller
      name={el.id}
      control={control}
      defaultValue={el.defaultValue} // <-- IMPORTANT
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={el.id + "_label"}>{el.label}</InputLabel>

          <MuiSelect
            labelId={el.id + "_label"}
            id={el.id}
            label={el.label}
            value={field.value ?? ""} // <-- safe fallback
            onChange={(e) => field.onChange(e.target.value ?? "")} //.hard fix
            onBlur={field.onBlur}
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
