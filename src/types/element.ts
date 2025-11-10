export type ElementType = {
  id: number;
  type: string | undefined;
  source?: "sidebar" | "plus";
  label?: string;
  placeholder?: string;
  options?: {
    option: string;
    value: string | number;
  }[];
  required?: boolean;
  checked?: boolean;
};
