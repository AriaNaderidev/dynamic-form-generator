// import FormRenderer from "./FormRenderer";
// import sampleSchema from "../data/sample.json";
// import type { FormSchema } from "../types/form";
import Header from "./Header";
import MainArea from "./MainArea";
import SideBar from "./SideBar";

const AppLayout: React.FC = () => {
  // const schema = sampleSchema as FormSchema;

  return (
    <div className="grid h-screen grid-cols-[12rem_1fr] grid-rows-[4rem_1fr]">
      <header className="col-start-1 -col-end-1 flex flex-col items-center justify-between bg-(--primary-bg-color)">
        <Header />
        <hr className="w-[96%] text-(--primary-border-color)" />
      </header>
      <main className="col-start-2 row-start-2 bg-(--primary-bg-color)">
        <MainArea />
      </main>
      <aside className="flex h-[90%] items-center justify-center bg-(--primary-bg-color)">
        <SideBar />
      </aside>
    </div>
  );
};

export default AppLayout;
