import { Schema } from "joi";
import throwError from "../utils/throwError.js";

export function validateSchema(schema: Schema, body: any) {
  const { error, value } = schema.validate(body);

  if(error) throwError(`${error.details[0].message}`)
}