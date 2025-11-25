import { useForm, type SubmitHandler } from "react-hook-form";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
import type { ElementType } from "../../types/element";
import { useEffect } from "react";
import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";

interface EditCheckboxFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

const EditCheckboxForm = ({ sourceEl, onClose }: EditCheckboxFormProps) => {
  const { setElements } = useFormBuilderContext();

  const { register, handleSubmit, reset } = useForm<Record<string, unknown>>({
    defaultValues: {
      label: "",
      className: "",
      disabled: "",
      checked: "",
      name: "",
      validation: {},
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        checked: sourceEl?.checked || false,
        disabled: sourceEl?.disabled || false,
        name: sourceEl?.name || "",
        validation: sourceEl?.validation || {},
      });
    }
  }, [sourceEl, reset]);

  const updateElement = (id: string, updates: Record<string, unknown>) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id !== id) return el;

        const updatedEl = { ...el, ...updates };

        if (updates.name && typeof updates.name === "string") {
          const parts = el.id.split("_");
          const randomPart = parts[1]; // the number
          updatedEl.id = `${updates.name}_${randomPart}`;
        }

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
      <>
        <RedundantFormSection register={register} sourceEl={sourceEl} />

        <FunctionalFormButton resetText="Clear" submitText="Submit" />
      </>
    </form>
  );
};

export default EditCheckboxForm;
