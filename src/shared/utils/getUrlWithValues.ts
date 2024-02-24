// this method get form values and fill in the url path
export function getUrlWithValues(formValues: any, path: string): string {
  const regex = /{([^{}]+)}/g;
  const valores = [];

  let match;
  while ((match = regex.exec(path)) !== null) {
    valores.push(match[1]);
  }

  let urlWithValues = path;
  valores.forEach((i) => (urlWithValues = urlWithValues.replace(`{${i}}`, formValues[i])));
  return urlWithValues;
}
