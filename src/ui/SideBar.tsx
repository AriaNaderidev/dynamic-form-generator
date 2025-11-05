import FormElementsList from "./FormElementsList";

const SideBar: React.FC = () => {
  return (
    <div className="flex h-[50%] w-full items-center rounded-tr-xl rounded-br-xl border-r border-(--primary-border-color) bg-[#737373b0] p-2">
      <FormElementsList />
    </div>
  );
};

export default SideBar;
