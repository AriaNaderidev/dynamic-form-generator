import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import { useEffect } from "react";
import type { ElementType } from "../../types/element";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
import { FormControl, MenuItem, Select as MuiSelect } from "@mui/material";
import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";

interface EditInputFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

const EditInputForm = ({ sourceEl, onClose }: EditInputFormProps) => {
  const { setElements } = useFormBuilderContext();

  const typeOptions = [
    "text",
    "number",
    "date",
    "email",
    "tel",
    "time",
    "color",
    "file",
  ];

  const { register, handleSubmit, reset, control, watch } = useForm<
    Record<string, unknown>
  >({
    defaultValues: {
      label: "",
      className: "",
      type: "",
      disabled: "",
      name: "",
      validation: {},
    },
  });

  useEffect(() => {
    if (sourceEl) {
      reset({
        label: sourceEl?.label || "",
        className: sourceEl?.className || "",
        type: sourceEl?.type || "",
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
        return updatedEl;
      }),
    );
  };

  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    updateElement(sourceEl?.id as unknown as string, data);
    onClose();
  };

  const selectedType = watch("type");

  return (
    <form
      className="flex h-full w-full flex-col gap-4 rounded-md bg-(--primary-bg-color) p-5 text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RedundantFormSection
        sourceEl={sourceEl}
        register={register}
        selectedType={selectedType}
      />
      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Type</label>
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <FormControl fullWidth>
              <MuiSelect
                MenuProps={{
                  disablePortal: true,
                }}
                {...field}
                defaultValue={field.value || typeOptions[0]}
                className="z-9999 h-10 rounded p-1.5 shadow"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "0 !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "0 !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "0 !important",
                  },
                }}
                {...field}
              >
                {typeOptions?.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </MuiSelect>
            </FormControl>
          )}
        />
      </div>

      <FunctionalFormButton resetText="Clear" submitText="Submit" />
    </form>
  );
};

export default EditInputForm;
