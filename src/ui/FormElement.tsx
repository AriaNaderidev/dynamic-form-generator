type FormElementProps = {
  type: string;
};

const FormElement: React.FC<FormElementProps> = ({ type }) => {
  return (
    <div
      className="w-[100px] cursor-pointer rounded-md p-2 text-center text-xs font-medium text-black shadow-[0px_0px_9px_-1px_#c9c9c9] duration-200 hover:scale-[1.1]"
      draggable
    >
      <p>{type}</p>
    </div>
  );
};

export default FormElement;
