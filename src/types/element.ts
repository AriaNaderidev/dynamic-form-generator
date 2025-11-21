export type BaseValidation = {
  required?: boolean;
  requiredMessage?: string;

  useMinLength?: boolean;
  minLength?: number;
  minLengthMessage?: string;

  useMaxLength?: boolean;
  maxLength?: number;
  maxLengthMessage?: string;

  useMin?: boolean;
  min?: number;
  minMessage?: string;

  useMax?: boolean;
  max?: number;
  maxMessage?: string;

  pattern?: string;
  patternMessage?: string;
};

export type ElementType = {
  id: string;
  name: string;
  type:
    | "text"
    | "number"
    | "email"
    | "file"
    | "date"
    | "time"
    | "tel"
    | "color"
    | "password"
    | "checkbox"
    | "select"
    | "textarea"
    | "radiogroup"
    | "combobox";
  source?: "sidebar" | "plus";
  label?: string;
  options?: {
    option?: string;
    value: string | number;
  }[];
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  validation?: BaseValidation;
  defaultValue?: string;
};
