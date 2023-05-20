export default function toFormData(formDataObject: object) {
  const formData = new FormData();
  Object.entries(formDataObject).forEach(([fieldName, fieldValue]) => {
    if (fieldValue instanceof FileList || Array.isArray(fieldValue)) {
      [...fieldValue].forEach((arrayFieldItem) => {
        formData.append(fieldName, arrayFieldItem);
      });
    } else {
      formData.append(fieldName, fieldValue);
    }
  });
  return formData;
}
