import type { ElementType } from "../../types/element";

import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";
import { useEditForm } from "../../hooks/useEditForm";

interface EditOptionalElementFormProps {
  sourceEl: ElementType;
  onClose: () => void;
}

const EditOptionalElementForm = ({
  sourceEl,
  onClose,
}: EditOptionalElementFormProps) => {
  const { handleSubmit, onSubmit, register } = useEditForm({
    sourceEl,
    onClose,
  });

  return (
    <form
      className="flex h-full w-full flex-col gap-4 rounded-md bg-(--primary-bg-color) p-5 text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RedundantFormSection sourceEl={sourceEl} register={register} />

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Options</label>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {sourceEl.options?.map((_, id) => (
            <input
              key={id}
              className="rounded p-1 shadow placeholder:text-gray-400"
              type="text"
              placeholder={`${id} option`}
              {...register(`options.${id}.value`)}
            />
          ))}
        </div>
      </div>

      <FunctionalFormButton resetText="Clear" submitText="Submit" />
    </form>
  );
};

export default EditOptionalElementForm;
