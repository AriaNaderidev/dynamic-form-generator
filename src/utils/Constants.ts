import type { ElementType } from "../types/element";
import { getUniqueRandomNumber } from "./helpers";

export const elementsObj: ElementType[] = [
  {
    id: getUniqueRandomNumber(),
    type: "Checkbox",
    required: true,
    label: "Use different settings for my mobile devices",
    checked: true,
  },
  {
    id: getUniqueRandomNumber(),
    type: "Input",
    required: true,
    label: "Username",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Password",
    required: true,
    label: "Password",
  },
  {
    id: getUniqueRandomNumber(),
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
  },
  {
    id: getUniqueRandomNumber(),
    type: "Textarea",
    required: true,
    label: "Bio",
  },
  {
    id: getUniqueRandomNumber(),
    type: "RadioGroup",
    required: true,
    label: "Gender",
  },
  {
    id: getUniqueRandomNumber(),
    type: "Reset",
  },
];
