export type FieldType = "text" | "number" | "select" | "checkbox";

export type FieldSchema = {
  name: string;
  label: string;
  type: FieldType;
  options?: {
    label: string;
    value: string | number;
  }[];
  required: boolean;
};

export type FormSchema = {
  fields: FieldSchema[];
};
