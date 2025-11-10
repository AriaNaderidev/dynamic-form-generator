import ElementsList from "./ElementsList";

const SideBar: React.FC = () => {
  return (
    <div className="flex h-[50%] w-full items-center rounded-tr-xl rounded-br-xl border-r border-(--primary-border-color) bg-[#000000da] p-2">
      <ElementsList />
    </div>
  );
};

export default SideBar;
