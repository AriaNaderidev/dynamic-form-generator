import { useForm, type SubmitHandler } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import { useEffect } from "react";
import type { ElementType } from "../../types/element";
import { useFormBuilderContext } from "../../context/FormBuilderContext";

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
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        required: sourceEl?.required || true,
        disabled: sourceEl?.disabled || false,
        name: sourceEl?.name || "",
      });
    }
  }, [sourceEl, reset]);

  const updateElement = (id: string, updates: Record<string, unknown>) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id !== id) return el;

        const updatedEl = { ...el, ...updates };

        // if (updates.name && typeof updates.name === "string") {
        //   const parts = el.id.split("_");
        //   const randomPart = parts[1]; // the number
        //   updatedEl.id = `${updates.name}_${randomPart}`;
        // }

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
      <h2 className="text-2xl font-medium">Edit {sourceEl?.type} field</h2>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Label</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("label")}
        />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Classname</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("className")}
        />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Name</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("name")}
        />
      </div>

      <div className="flex w-[40%] items-center gap-2">
        <div className="flex w-[90px] gap-2 rounded-md border p-2">
          <label className="text-sm">Required</label>
          <input
            className="cursor-pointer rounded p-1.5 text-black"
            type="checkbox"
            {...register("required")}
          />
        </div>

        <div className="flex w-[90px] gap-2 rounded-md border p-2">
          <label className="text-sm">Disabled</label>
          <input
            className="cursor-pointer rounded p-1.5 text-black"
            type="checkbox"
            {...register("disabled")}
          />
        </div>
      </div>

      <SubmitButton>Save changes</SubmitButton>
    </form>
  );
};

export default EditPasswordInputForm;
