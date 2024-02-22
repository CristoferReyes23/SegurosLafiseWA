export function getUrlWithValues(formValues: any, path: string): string {
  console.log(formValues);

  // Definir una expresión regular para encontrar los valores entre llaves
  const regex = /{([^{}]+)}/g;

  // Array para almacenar los valores encontrados
  const valores = [];
  let match;

  // Iterar sobre las coincidencias encontradas en la cadena
  while ((match = regex.exec(path)) !== null) {
    // El valor capturado está en el grupo de captura 1
    valores.push(match[1]);
  }

  let urlWithValues = path;
  valores.forEach((i) => (urlWithValues = urlWithValues.replace(`{${i}}`, formValues[i])));
  return urlWithValues;
}
