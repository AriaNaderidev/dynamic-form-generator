import FormElementsList from "./FormElementsList";

const SideBar: React.FC = () => {
  return (
    <div className="flex h-[80%] w-full items-center border-r border-(--primary-border-color)">
      <FormElementsList />
    </div>
  );
};

export default SideBar;
