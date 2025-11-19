export type ElementType = {
  id: string;
  name: string;
  type: string;
  source?: "sidebar" | "plus";
  label?: string;
  options?: {
    option?: string;
    value: string | number;
  }[];
  required?: boolean;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
};
