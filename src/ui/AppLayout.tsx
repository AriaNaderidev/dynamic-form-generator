// import FormRenderer from "./FormRenderer";
// import sampleSchema from "../data/sample.json";
// import type { FormSchema } from "../types/form";
import Header from "./Header";
import MainArea from "./MainArea";
import SideBar from "./SideBar";

const AppLayout: React.FC = () => {
  // const schema = sampleSchema as FormSchema;

  return (
    <div className="grid h-screen grid-cols-[20rem_1fr] grid-rows-[1fr_9fr]">
      <header className="">
        <Header />
      </header>
      <main className="col-start-2 row-start-2 bg-slate-50">
        <MainArea />
      </main>
      <aside className="col-start-1 row-start-1 -row-end-1 flex h-screen items-center justify-center overflow-y-auto bg-[#1f4ad7] p-2">
        {/* <SideBar /> */}
      </aside>
    </div>
  );
};

export default AppLayout;
