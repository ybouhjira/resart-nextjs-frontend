export const required = { value: true, message: "required" };
export const fixedLength = (length: number) => ({
  minLength: { value: length, message: `length should be ${length}` },
  maxLength: { value: length, message: `length should be ${length}` },
});
