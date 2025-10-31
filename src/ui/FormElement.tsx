type FormElementProps = {
  type: string;
};

const FormElement: React.FC<FormElementProps> = ({ type }) => {
  return (
    <div
      className="mb-2 inline-block w-[220px] cursor-pointer rounded border border-sky-200 text-center font-semibold text-slate-100 duration-120 hover:scale-105"
      draggable
    >
      <p>{type}</p>
    </div>
  );
};

export default FormElement;
