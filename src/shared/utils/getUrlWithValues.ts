// this method get form values and fill in the url path
export function getUrlWithValues(formValues: any, path: string): string {
  const regex = /{([^{}]+)}/g;
  const values = [];

  let match;
  while ((match = regex.exec(path)) !== null) {
    values.push(match[1]);
  }

  let urlWithValues = path;
  values.forEach((i) => (urlWithValues = urlWithValues.replace(`{${i}}`, formValues[i])));
  return urlWithValues;
}
