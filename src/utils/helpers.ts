import { z } from "zod";
import type { ElementType } from "../types/element";
import type { ZodTypeAny } from "zod";

export const getUniqueRandomNumber = (): number => {
  const usedNumbers = new Set<number>();
  let randomNum: number;

  do {
    randomNum = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (usedNumbers.has(randomNum));

  usedNumbers.add(randomNum);
  return randomNum;
};

export const buildZodSchema = (elements: ElementType[]) => {
  const shape: Record<string, ZodTypeAny> = {};

  for (const el of elements) {
    console.log(el);

    const rules = el.validation || {};
    console.log(rules);

    let schema: any;

    // ----------------------------
    // STEP 1: Base Schema by Type (Pure)
    // ----------------------------
    switch (el.type) {
      case "text":
      case "password":
      case "tel":
      case "color":
      case "date":
      case "time":
      case "textarea":
      case "email":
      case "combobox":
      case "select":
        schema = z.string();
        break;

      case "number":
        schema = z.coerce.number();
        break;

      case "checkbox":
        schema = z.boolean();
        break;

      case "file":
        schema = z.any();
        break;

      default:
        schema = z.any();
    }

    // ----------------------------
    // STEP 2: Apply Required Rule
    // ----------------------------
    if (rules.required) {
      const msg = rules.requiredMessage || "This field is required";

      switch (el.type) {
        case "checkbox":
          schema = schema.refine((val) => val === true, { message: msg });
          break;

        case "number":
          schema = (schema as z.ZodNumber).min(1, msg);
          break;

        case "text":
        case "email":
        case "password":
        case "tel":
        case "color":
        case "date":
        case "time":
        case "textarea":
        case "combobox":
        case "select":
          schema = (schema as z.ZodString).min(1, msg);
          break;

        case "file":
          schema = schema.refine(
            (val) => val instanceof FileList && val.length > 0,
            { message: msg },
          );
          break;

        default:
          console.warn("Unhandled type in required:", el.type);
      }
    }

    // ----------------------------
    // STEP 3: String Rules
    // ----------------------------

    if (rules.useMinLength) {
      schema = schema.min(
        rules.minLength,
        rules.minLengthMessage || `Minimum ${rules.minLength} characters`,
      );
    }

    if (rules.useMaxLength) {
      if ((rules.maxLength as unknown as string) !== "")
        schema = schema.max(
          rules.maxLength,
          rules.maxLengthMessage || `Maximum ${rules.maxLength} characters`,
        );
    }

    if (rules.pattern) {
      const regex = new RegExp(rules.pattern);
      schema = schema.regex(regex, rules.patternMessage || "Invalid format");
    }

    // ----------------------------
    // STEP 4: Number Rules
    // ----------------------------
    if (el.type === "number") {
      if (Number(rules.min)) {
        schema = schema.min(
          rules.min,
          rules.minMessage || `Minimum value is ${rules.min}`,
        );
      }

      if (Number(rules.min)) {
        schema = schema.max(
          rules.max,
          rules.maxMessage || `Maximum value is ${rules.max}`,
        );
      }
    }

    // ----------------------------
    // Assign
    // ----------------------------
    shape[el.id] = schema;
  }

  return z.object(shape);
};
