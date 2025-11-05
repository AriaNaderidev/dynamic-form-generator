import type { FormElementType } from "../types/element";
import { getUniqueRandomNumber } from "./helpers";

export const formElements: FormElementType[] = [
  {
    id: getUniqueRandomNumber(),
    type: "Checkbox",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Date Picker",
  },
  {
    id: getUniqueRandomNumber(),
    type: "File Input",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Input",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Password",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Select",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Textarea",
  },
  {
    id: getUniqueRandomNumber(),
    type: "RadioGroup",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Button",
  },
];
