import { useDraggable } from "@dnd-kit/core";

type ElementProps = {
  id: number;
  type: string;
};

const Elements = ({ type, id }: ElementProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className="w-[100px] cursor-grab rounded-md p-2 text-center text-sm font-medium text-white shadow-[0px_0px_9px_black] duration-200 hover:scale-[1.1]"
    >
      <p>{type}</p>
    </div>
  );
};

export default Elements;
