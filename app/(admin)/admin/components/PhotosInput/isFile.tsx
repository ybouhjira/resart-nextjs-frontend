export function isFile(fileOrString: File | string): fileOrString is File {
  return (fileOrString as File).name !== undefined;
}
