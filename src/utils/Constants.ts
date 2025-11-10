import type { ElementType } from "../types/element";
import { getUniqueRandomNumber } from "./helpers";

export const elementsObj: ElementType[] = [
  {
    id: "checkbox_" + getUniqueRandomNumber(),
    type: "Checkbox",
    required: true,
    label: "Use different settings for my mobile devices",
    checked: true,
    name: "checkbox",
  },
  {
    id: "input_" + getUniqueRandomNumber(),
    type: "Input",
    required: true,
    label: "Username",
    name: "input",
  },
  {
    id: "password-input_" + getUniqueRandomNumber(),
    type: "Password",
    required: true,
    label: "Password",
    name: "password-input",
  },
  {
    id: "select_" + getUniqueRandomNumber(),
    type: "Select",
    required: true,
    label: "Email",
    options: [
      {
        option: "aria45@gmail.com",
        value: "aria45@gmail.com",
      },
      {
        option: "test@gmail.com",
        value: "test@gmail.com",
      },
      {
        option: "mmd88@gmail.com",
        value: "mmd88@gmail.com",
      },
    ],
    name: "select",
  },
  {
    id: "text-area_" + getUniqueRandomNumber(),
    type: "Textarea",
    required: true,
    label: "Bio",
    name: "text-area",
  },
  {
    id: "radio-group_" + getUniqueRandomNumber(),
    type: "RadioGroup",
    required: true,
    label: "Gender",
    name: "radio-group",
  },
  {
    id: "reset-btn_" + getUniqueRandomNumber(),
    type: "Reset",
    name: "reset-btn",
  },
];
