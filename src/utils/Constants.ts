import type { ElementType } from "../types/element";
import { getUniqueRandomNumber } from "./helpers";

export const elementsObj: ElementType[] = [
  {
    id: "checkbox_" + getUniqueRandomNumber(),
    name: "checkbox",
    type: "Checkbox",
    label: "Use different settings for my mobile devices",
    checked: true,
    disabled: false,
  },
  {
    id: "input_" + getUniqueRandomNumber(),
    name: "input",
    type: "Input",
    required: true,
    label: "Username",

    disabled: false,
  },
  {
    id: "password-input_" + getUniqueRandomNumber(),
    name: "password-input",
    type: "Password",
    required: true,
    label: "Password",

    disabled: false,
  },
  {
    id: "select_" + getUniqueRandomNumber(),
    name: "select",
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

    disabled: false,
  },
  {
    id: "text-area_" + getUniqueRandomNumber(),
    name: "text-area",
    type: "Textarea",
    required: true,
    label: "Bio",

    disabled: false,
  },
  {
    id: "radio-group_" + getUniqueRandomNumber(),
    name: "radio-group",
    type: "RadioGroup",
    required: true,
    label: "Gender",
    options: [
      { option: "Female", value: "female" },
      { option: "Male", value: "male" },
      { option: "Other", value: "other" },
    ],

    disabled: false,
  },
  {
    id: "combobox_" + getUniqueRandomNumber(),
    name: "combobox",
    type: "Combobox",
    required: true,
    label: "Language",
    options: [
      {
        value: "Persian",
      },
      {
        value: "English(US)",
      },
      {
        value: "English(UK)",
      },
      {
        value: "Italian",
      },
      {
        value: "French",
      },
      {
        value: "German",
      },
    ],

    disabled: false,
  },
];
