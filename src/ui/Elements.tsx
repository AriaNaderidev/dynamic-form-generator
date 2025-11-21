import { useDraggable } from "@dnd-kit/core";

type ElementProps = {
  id: number;
  name: string;
};

const Elements = ({ name, id }: ElementProps) => {
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
      <p>{name}</p>
    </div>
  );
};

export default Elements;
