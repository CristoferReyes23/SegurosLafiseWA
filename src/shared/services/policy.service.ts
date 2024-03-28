import { PolicyApi } from "@/shared/apis/policy.api";
import {
  CreatePolicyRequestModel,
  DataViewModel,
  EnteViewModel,
} from "@/shared/models/request/CreatePolicyRequest.model";
import { CreatePolicyResponseModel } from "@/shared/models/viewModels/CreatePolicyViewModel.model";

export class PolicyService {
  static async createPolicy(formData: any): Promise<CreatePolicyResponseModel> {
    //#region set body data
    const dataViewModel: DataViewModel = {
      marcaId: Number(formData["marcaId"]),
      modeloId: Number(formData["modeloId"]),
      anio: Number(formData["anio"]),
      valorNuevo: Number(formData["valorNuevo"]),
      placa: formData["placa"],
      chasis: formData["chasis"],
      color: formData["color"],
      motor: formData["motor"],
      puertas: Number(formData["puertas"]),
    };

    const enteViewModel: EnteViewModel = {
      tipoId: String(formData["tipoId"]),
      documentoIdentificacion: formData["documentoIdentificacion"],
      nombre: formData["nombre"],
      apellido: formData["apellido"],
      sexo: formData["sexo"],
      fechaNacimiento: formData["fechaNacimiento"],
      email: formData["email"],
      telefono: formData["telefono"],
      celular: formData["celular"],
      paisOrigen: Number(formData["paisOrigen"]),
      provincia: Number(formData["provincia"]),
      canton: Number(formData["canton"]),
      distrito: Number(formData["distrito"]),
      direccion: formData["direccion"],
      profesion: Number(formData["profesion"]),
      nombreConyuge: formData["nombreConyuge"],
    };

    const bodyCreatePolicy: CreatePolicyRequestModel = {
      planId: Number(formData["planId"]),
      uso: Number(formData["usoo"]),
      dataViewModel,
      enteViewModel,
    };
    //#endregion

    const response = await PolicyApi.createPolicyByAirpak(bodyCreatePolicy);
    console.log(response);

    return {
      policyId: 0,
      success: false,
    };
  }

  static async getPdf(policyId: number): Promise<string> {
    const pdfObject = await PolicyApi.getPdf(policyId);
    return URL.createObjectURL(pdfObject);
  }
}
