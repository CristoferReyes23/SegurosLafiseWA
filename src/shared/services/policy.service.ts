export class PolicyService {
  static savePolicy(formData: any) {
    const dataViewModel = buildObject(
      ["marcaId", "modeloId", "anio", "valorNuevo", "placa", "chasis", "color", "motor", "puertas"],
      formData
    );
    const enteViewModel = buildObject(
      [
        "tipoId",
        "documentoIdentificacion",
        "nombre",
        "apellido",
        "sexo",
        "fechaNacimiento",
        "email",
        "telefono",
        "celular",
        "paisOrigen",
        "provincia",
        "canton",
        "distrito",
        "direccion",
        "profesion",
        "nombreConyuge",
        "xpaisOrigen",
        "xprovincia",
        "xcanton",
        "xdistrito",
      ],
      formData
    );

    //get category of car
    //get seats number
    //send request to server
  }
}

function buildObject(properties: string[], formData: any) {
  const obj: { [key: string]: string } = {};

  properties.forEach((property) => {
    obj[property] = formData[property];
  });
  return obj;
}
