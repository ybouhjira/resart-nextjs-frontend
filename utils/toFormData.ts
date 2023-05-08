export default function toFormData(formDataObject: Record<string, any>) {
  const formData = new FormData();
  Object.entries(formDataObject).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
}
