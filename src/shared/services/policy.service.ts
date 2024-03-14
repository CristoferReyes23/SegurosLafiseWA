import { PolicyApi } from "@/shared/apis/policy.api";
import { CreatePolicyRequestModel } from "@/shared/models/request/CreatePolicyRequest.model";
import { CreatePolicyResponseModel } from "@/shared/models/response/CreatePolicyResponse.model";

export class PolicyService {
  static async createPolicy(formData: any): Promise<CreatePolicyResponseModel> {
    const dataViewModel = buildObject(
      ["marcaId", "modeloId", "anio", "valorNuevo", "placa", "chasis", "color", "motor", "puertas"],
      formData
    ) as any;

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
    ) as any;

    const bodyCreatePolicy: CreatePolicyRequestModel = {
      planId: formData["planId"],
      agenciaId: 1,
      inicioVigencia: new Date().toISOString(),
      uso: formData["usoo"],

      dataViewModel,
      enteViewModel,
      values: {
        valn: "0",
        anio: formData["anio"],
        usoo: formData["usoo"],
        cate: formData["cate"],
        nasiento: formData["nasiento"],
      },
    };

    // create policy
    const policyId = await PolicyApi.createPolicy(bodyCreatePolicy);

    // confirm policy =
    const isOk = await PolicyApi.confirmPolicy(policyId);
    return {
      policyId: policyId,
      success: isOk,
    };
  }
}

function buildObject(properties: string[], formData: any) {
  const obj: { [key: string]: string } = {};

  properties.forEach((property) => {
    obj[property] = formData[property];
  });
  return obj;
}
