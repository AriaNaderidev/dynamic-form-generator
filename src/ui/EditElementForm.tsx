import type { JSX } from "@emotion/react/jsx-runtime";
import { useFormBuilderContext } from "../context/FormBuilderContext";
import EditInputForm from "./elements-edit-form/EditInputForm";
import EditPasswordInputForm from "./elements-edit-form/EditPasswordInputForm";
import type { ElementType } from "../types/element";
import EditCheckboxForm from "./elements-edit-form/EditCheckboxForm";
import EditTextareaForm from "./elements-edit-form/EditTextareaForm";
import EditComboboxForm from "./elements-edit-form/EditComboboxForm";
import EditOptionalElementForm from "./elements-edit-form/EditOptionalElementForm";

interface EditElementFormProps {
  id: number;
  onClose: () => void;
}

const editFormMap: Record<
  string,
  (props: { sourceEl: ElementType; onClose: () => void }) => JSX.Element
> = {
  text: EditInputForm,
  number: EditInputForm,
  date: EditInputForm,
  time: EditInputForm,
  color: EditInputForm,
  tel: EditInputForm,
  email: EditInputForm,
  file: EditInputForm,

  password: EditPasswordInputForm,
  checkbox: EditCheckboxForm,
  textarea: EditTextareaForm,
  select: EditOptionalElementForm,
  radiogroup: EditOptionalElementForm,
  combobox: EditComboboxForm,
};

const EditElementForm = ({ id, onClose }: EditElementFormProps) => {
  const { elements } = useFormBuilderContext();

  const sourceEl = elements.find((el) => (el.id as unknown as number) === id);

  if (!sourceEl) return null;

  const EditFormComponent = editFormMap[sourceEl.type as string];

  if (!EditFormComponent) return null;
  return <EditFormComponent sourceEl={sourceEl} onClose={onClose} />;
};

export default EditElementForm;
