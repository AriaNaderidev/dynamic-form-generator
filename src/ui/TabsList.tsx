import Tab from "./Tab";

const TabsList = () => {
  return (
    <div className="flex h-10 w-40 items-center justify-evenly rounded-md bg-[#e6e6e6] p-2 text-sm text-gray-500">
      <Tab ariaLabel="prev">Preview</Tab>
      <Tab ariaLabel="json">JSON</Tab>
    </div>
  );
};

export default TabsList;
