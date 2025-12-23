import ElementsList from "./ElementsList";

const SideBar = () => {
  return (
    <div className="h-[40%] w-full rounded-tr-xl rounded-br-xl border-r border-(--primary-border-color) bg-(--primary-btn-color) p-2">
      <ElementsList />
    </div>
  );
};

export default SideBar;
