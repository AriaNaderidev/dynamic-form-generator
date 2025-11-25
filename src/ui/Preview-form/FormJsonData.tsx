import { HiOutlineClipboardCopy } from "react-icons/hi";
import { useFormBuilderContext } from "../../context/FormBuilderContext";
// @ts-expect-error: no types for react-syntax-highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error: no types for react-syntax-highlighter styles
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FormJsonData = () => {
  const { formData } = useFormBuilderContext();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    } catch (err) {
      console.error(`Failed to copy: ${err}`);
    }
  };

  return (
    <div className="flex h-full flex-col items-end overflow-x-auto rounded">
      <span
        className="h-[25px] w-[25px] cursor-pointer text-2xl"
        onClick={handleCopy}
      >
        <HiOutlineClipboardCopy />
      </span>
      <span className="h-full w-full">
        <SyntaxHighlighter language="json" style={oneDark}>
          {JSON.stringify(formData, null, 2)}
        </SyntaxHighlighter>
      </span>
    </div>
  );
};

export default FormJsonData;
