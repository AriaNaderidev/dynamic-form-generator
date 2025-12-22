import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useFormBuilderContext } from "../context/FormBuilderContext";
import type { ElementType } from "../types/element";

interface useEditFormProps {
  sourceEl: ElementType;
  onClose?: () => void;
}

export const useEditForm = ({ sourceEl, onClose }: useEditFormProps) => {
  const { setElements } = useFormBuilderContext();

  const { register, handleSubmit, reset } = useForm<Record<string, unknown>>({
    defaultValues: {
      name: "",
      label: "",
      className: "",
      validation: {},
      options: [],
      disabled: false,
      checked: false,
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        name: sourceEl?.name || "",
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        options: sourceEl?.options || [],
        checked: sourceEl.checked ?? false,
        disabled: sourceEl?.disabled ?? false,
        validation: sourceEl?.validation || {},
      });
    }
  }, [sourceEl, reset]);

  const updateElement = (id: string, updates: Record<string, unknown>) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id !== id) return el;

        const updatedEl = { ...el, ...updates };

        return updatedEl;
      }),
    );
  };

  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    console.log(data);

    updateElement(String(sourceEl?.id), data);
    onClose!();
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    updateElement,
  };
};
