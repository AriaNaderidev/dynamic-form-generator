import { useState } from "react";
import { type UseFormRegister } from "react-hook-form";
import type { ElementType } from "../types/element";

interface RedundantFormSectionProps {
  register: UseFormRegister<any>;
  sourceEl: ElementType;
  selectedType?: unknown;
}

const RedundantFormSection = ({
  register,
  sourceEl,
  selectedType,
}: RedundantFormSectionProps) => {
  const [required, setRequired] = useState(true);
  const [minLength, setMinLength] = useState(true);
  const [maxLength, setMaxLength] = useState(true);
  const [min, setMin] = useState(true);
  const [max, setMax] = useState(true);
  const regexType = ["text", "email", "tel", "number", "textarea"];

  return (
    <>
      <h2 className="text-2xl font-medium">Edit {sourceEl?.type} field</h2>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Label</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("label")}
        />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Classname</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("className")}
        />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <label className="text-sm">Name</label>
        <input
          className="rounded p-1.5 shadow"
          type="text"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        {sourceEl.type === "checkbox" ? (
          <div className="flex w-[90px] gap-2 rounded-md p-2">
            <label className="text-sm">Checked</label>
            <input
              className="cursor-pointer rounded p-1.5 text-black"
              type="checkbox"
              {...register("checked")}
            />
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-2 p-1">
          <label className="text-sm">Required</label>
          <input
            className="cursor-pointer text-black"
            type="checkbox"
            {...register("validation.required")}
            onChange={(e) => setRequired(e.target.checked)}
          />
          {required ? (
            <input
              placeholder="Required message"
              className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
              type="text"
              {...register("validation.requiredMessage")}
            />
          ) : null}
        </div>

        {selectedType === "text" ||
        sourceEl.type === "password" ||
        sourceEl.type === "textarea" ? (
          <>
            <div className="flex items-center justify-between gap-2 p-1">
              <label className="text-sm">Min Length</label>
              <input
                className="cursor-pointer text-black"
                type="checkbox"
                {...register("validation.useMinLength")}
                onChange={(e) => setMinLength(e.target.checked)}
              />

              {minLength ? (
                <>
                  <input
                    placeholder="Min length"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="number"
                    {...register("validation.minLength")}
                  />
                  <input
                    placeholder="Min length message"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="text"
                    {...register("validation.minLengthMessage")}
                  />
                </>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-2 p-1">
              <label className="text-sm">Max Length</label>
              <input
                className="cursor-pointer text-black"
                type="checkbox"
                {...register("validation.useMaxLength")}
                onChange={(e) => setMaxLength(e.target.checked)}
              />

              {maxLength ? (
                <>
                  <input
                    placeholder="Max length"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="number"
                    {...register("validation.maxLength")}
                  />
                  <input
                    placeholder="Max length message"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="text"
                    {...register("validation.maxLengthMessage")}
                  />
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {selectedType === "number" ? (
          <>
            <div className="flex items-center justify-between gap-2 p-1">
              <label className="text-sm">Minimum adjuste</label>
              <input
                className="cursor-pointer text-black"
                type="checkbox"
                {...register("validation.useMin")}
                onChange={(e) => setMin(e.target.checked)}
              />

              {min ? (
                <>
                  <input
                    placeholder="Min value"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="number"
                    {...register("validation.min", {
                      valueAsNumber: true,
                    })}
                  />
                  <input
                    placeholder="Min value message"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="text"
                    {...register("validation.minMessage")}
                  />
                </>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-2 p-1">
              <label className="text-sm">Maximum adjuste</label>
              <input
                className="cursor-pointer text-black"
                type="checkbox"
                {...register("validation.useMax")}
                onChange={(e) => setMax(e.target.checked)}
              />

              {max ? (
                <>
                  <input
                    placeholder="Max value"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="number"
                    {...register("validation.max", {
                      valueAsNumber: true,
                    })}
                  />
                  <input
                    placeholder="Max value message"
                    className={`rounded p-1.5 text-sm shadow placeholder:text-gray-400`}
                    type="text"
                    {...register("validation.maxMessage")}
                  />
                </>
              ) : null}
            </div>
          </>
        ) : null}

        <div className="flex w-[90px] gap-2 p-1">
          <label className="text-sm">Disabled</label>
          <input
            className="cursor-pointer rounded p-1.5 text-black"
            type="checkbox"
            {...register("disabled")}
          />
        </div>
      </div>

      {regexType.includes(selectedType as string) ||
      regexType.includes(sourceEl.type) ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm">Custom pattern</label>
            <input
              placeholder="Regex"
              className="rounded p-1.5 text-sm shadow placeholder:text-gray-400"
              type="text"
              {...register("validation.pattern")}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Invalid message</label>
            <input
              placeholder="Message"
              className="rounded p-1.5 text-sm shadow placeholder:text-gray-400"
              type="text"
              {...register("validation.patternMessage")}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RedundantFormSection;
