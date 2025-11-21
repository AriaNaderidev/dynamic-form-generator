import { useForm, type SubmitHandler } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import { useEffect } from "react";
import type { ElementType } from "../../types/element";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
import RedundantFormSection from "../RedundantFormSections";

interface EditPasswordInputFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

const EditPasswordInputForm = ({
  sourceEl,
  onClose,
}: EditPasswordInputFormProps) => {
  const { setElements } = useFormBuilderContext();

  const { register, handleSubmit, reset } = useForm<Record<string, unknown>>({
    defaultValues: {
      label: "",
      className: "",
      required: "",
      disabled: "",
      name: "",
      validation: "",
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        disabled: sourceEl?.disabled || false,
        name: sourceEl?.name || "",
        validation: sourceEl.validation || {},
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

  return (
    <form
      className="flex h-full w-full flex-col gap-4 rounded-md bg-(--primary-bg-color) p-5 text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RedundantFormSection register={register} sourceEl={sourceEl} />
      <SubmitButton>Save changes</SubmitButton>
    </form>
  );
};

export default EditPasswordInputForm;
