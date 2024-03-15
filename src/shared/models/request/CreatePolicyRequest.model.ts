export interface CreatePolicyRequestModel {
  planId: number;
  agenciaId: number;
  inicioVigencia: string;
  uso: number;
  dataViewModel: DataViewModel;
  enteViewModel: EnteViewModel;
  values: ValuesViewModel;
}

export interface DataViewModel {
  marcaId: number;
  modeloId: number;
  anio: number;
  valorNuevo: number;
  placa: string;
  chasis: string;
  color: string;
  motor: string;
  puertas: number;
}

export interface EnteViewModel {
  tipoId: string;
  documentoIdentificacion: string;
  nombre: string;
  apellido: string;
  sexo: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
  celular: string;
  paisOrigen: number;
  provincia: number;
  canton: number;
  distrito: number;
  direccion: string;
  profesion: number;
  nombreConyuge: string;
  xpaisOrigen: string;
  xprovincia: string;
  xcanton: string;
  xdistrito: string;
}

export interface ValuesViewModel {
  valn: string;
  anio: string;
  usoo: string;
  cate: string;
  nasiento: string;
}
