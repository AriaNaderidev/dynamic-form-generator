import type { FormSchema } from "../types/form";

type FormRendererProps = {
  schema: FormSchema;
};

const FormRenderer: React.FC<FormRendererProps> = ({ schema }) => {
  return (
    <form className="w-full h-full  shadow-[0px_0px_13px_0px_#d1d1d1] shadow-stone-200 rounded-2xl p-3 space-y-2">
      {schema.fields.map((field) => {
        switch (field.type) {
          case "text":
          case "number":
            return (
              <div key={field.name + Math.random()} className="section">
                <label className="label">
                  {field.name}
                  <input
                    className="input"
                    type={field.type}
                    required={field.required}
                    name={field.name}
                  />
                </label>
              </div>
            );

          case "checkbox":
            return (
              <div key={field.name + Math.random()} className="section">
                <label className="label">
                  {field.name}
                  <input
                    type={field.type}
                    name={field.name}
                    className="ml-2 w-3.5 h-3.5"
                  />
                </label>
              </div>
            );

          case "select":
            return (
              <div key={field.name + Math.random()}>
                <label className="label">
                  {field.name}
                  <select name={field.name} className="border rounded ml-2">
                    {field.options?.map((option, index) => (
                      <option key={option.label + index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );

          default:
            return null;
        }
      })}
    </form>
  );
};

export default FormRenderer;
