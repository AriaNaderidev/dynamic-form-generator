import { useDraggable } from "@dnd-kit/core";

type FormElementProps = {
  id: number;
  type: string;
};

const FormElement = ({ type, id }: FormElementProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    //  transform
  } = useDraggable({
    id,
  });

  // const style: React.CSSProperties = {
  //   transform: transform
  //     ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
  //     : undefined,
  // };

  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      // style={style}
      className="w-[100px] cursor-grab rounded-md p-2 text-center text-sm font-medium text-white shadow-[0px_0px_9px_gray] duration-200 hover:scale-[1.1]"
    >
      <p>{type}</p>
    </div>
  );
};

export default FormElement;
