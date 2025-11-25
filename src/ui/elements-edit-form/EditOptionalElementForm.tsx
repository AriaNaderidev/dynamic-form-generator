import { useForm, type SubmitHandler } from "react-hook-form";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
import type { ElementType } from "../../types/element";
import { useEffect } from "react";

import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";

interface EditOptionalElementFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

export interface FormValues {
  label: string;
  className: string;
  options: { option: string; value: string }[];
  disabled: boolean;
  name: string;
}

const EditOptionalElementForm = ({
  sourceEl,
  onClose,
}: EditOptionalElementFormProps) => {
  const { setElements } = useFormBuilderContext();

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<FormValues>({
      defaultValues: {
        label: "",
        className: "",
        options: [],
        disabled: false,
        name: "",
      },
    });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        options:
          (sourceEl?.options as { option: string; value: string }[]) || [],
        disabled: sourceEl?.disabled || false,
        name: sourceEl?.name || "",
      });
    }
  }, [sourceEl, reset]);

  const updateElement = (id: string, updates: Partial<FormValues>) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id !== id) return el;

        const updatedEl = { ...el, ...updates };
        return updatedEl;
      }),
    );
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateElement(sourceEl?.id as unknown as string, data);
    onClose();
  };

  const optionFields = watch("options") ?? [];

  return (
    <form
      className="flex h-full w-full flex-col gap-4 rounded-md bg-(--primary-bg-color) p-5 text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RedundantFormSection sourceEl={sourceEl} register={register} />

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Options</label>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {optionFields?.map(
            (_: { option: string; value: string }, id: number) => (
              <input
                key={id}
                className="rounded p-1 shadow placeholder:text-gray-400"
                type="text"
                placeholder={`${id + 1} option`}
                {...register(`options.${id}.option`, {
                  onChange: (e) => {
                    setValue(`options.${id}.value`, e.target.value);
                  },
                })}
              />
            ),
          )}
        </div>
      </div>

      <FunctionalFormButton resetText="Clear" submitText="Submit" />
    </form>
  );
};

export default EditOptionalElementForm;
