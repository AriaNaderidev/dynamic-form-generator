import type { ElementType } from "../../types/element";

import { useEditForm } from "../../hooks/useEditForm";

import RedundantFormSection from "../RedundantFormSections";
import FunctionalFormButton from "../FunctionalFormButton";

type EditCheckboxFormProps = {
  sourceEl: ElementType;
  onClose: () => void;
};

const EditCheckboxForm = ({ sourceEl, onClose }: EditCheckboxFormProps) => {
  const { handleSubmit, onSubmit, register } = useEditForm({
    sourceEl,
    onClose,
  });

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
