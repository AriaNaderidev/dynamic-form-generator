import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useFormBuilderContext } from "../context/FormBuilderContext";
import type { ElementType } from "../types/element";

interface useEditFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

export const useEditForm = ({ sourceEl, onClose }: useEditFormProps) => {
  const { setElements } = useFormBuilderContext();

  const { register, handleSubmit, reset } = useForm<Record<string, unknown>>({
    defaultValues: {
      label: "",
      className: "",
      validation: {},
      options: [],
      disabled: "",
      name: "",
      checked: true,
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        options: sourceEl?.options || [],
        disabled: sourceEl?.disabled ?? false,
        name: sourceEl?.name || "",
        validation: sourceEl?.validation || {},
        checked: sourceEl.checked ?? true,
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
    updateElement(sourceEl?.id as unknown as string, data);
    onClose();
  };

  return {
    handleSubmit,
    register,
    onSubmit,
  };
};
