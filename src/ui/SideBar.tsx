import ElementsList from "./ElementsList";

const SideBar: React.FC = () => {
  return (
    <div className="h-[42%] w-full rounded-tr-xl rounded-br-xl border-r border-(--primary-border-color) bg-[#000000d2] p-2">
      <ElementsList />
    </div>
  );
};

export default SideBar;
