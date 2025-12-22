import type { ElementType } from "../types/element";
import { getUniqueRandomNumber } from "./helpers";

export const elementsObj: ElementType[] = [
  {
    id: "checkbox_" + getUniqueRandomNumber(),
    name: "Checkbox",
    type: "checkbox",
    label: "Use different settings for my mobile devices",
    checked: false,
    disabled: false,
    validation: {
      required: true,
    },
  },
  {
    id: "input_" + getUniqueRandomNumber(),
    name: "Input",
    type: "text",
    validation: {
      required: true,
      useMinLength: false,
      useMaxLength: false,
      useMin: true,
      useMax: true,
    },
    label: "Username",
    disabled: false,
  },
  {
    id: "password_" + getUniqueRandomNumber(),
    name: "Password",
    type: "password",
    label: "Password",
    validation: {
      required: true,
      useMinLength: false,
      useMaxLength: false,
    },
    disabled: false,
  },
  {
    id: "select_" + getUniqueRandomNumber(),
    name: "Select",
    type: "select",
    validation: {
      required: true,
    },
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
    defaultValue: "",
  },
  {
    id: "textarea_" + getUniqueRandomNumber(),
    name: "Textarea",
    type: "textarea",
    label: "Bio",
    validation: {
      required: true,
      useMinLength: false,
      useMaxLength: false,
    },
    disabled: false,
  },
  {
    id: "radiogroup_" + getUniqueRandomNumber(),
    name: "Radiogroup",
    type: "radiogroup",
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
    name: "Combobox",
    type: "combobox",
    validation: {
      required: true,
    },
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
