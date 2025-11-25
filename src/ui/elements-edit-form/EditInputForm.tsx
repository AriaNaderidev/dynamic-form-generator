import { Controller, useForm } from "react-hook-form";
import { FormControl, MenuItem, Select as MuiSelect } from "@mui/material";

import type { ElementType } from "../../types/element";

import { useEditForm } from "../../hooks/useEditForm";

import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";

interface EditInputFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

const EditInputForm = ({ sourceEl, onClose }: EditInputFormProps) => {
  const { handleSubmit, register, onSubmit } = useEditForm({
    sourceEl,
    onClose,
  });
  const { control, watch } = useForm();
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
