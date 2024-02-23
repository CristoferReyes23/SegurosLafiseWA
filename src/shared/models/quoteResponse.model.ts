export interface QuoteResponseModel {
  sumaAsegurada: number;
  prima: number;
  descuento: number;
  impuestos: number;
  total: number;
  coberturas: Coverage[];
  primaMensual: number;
  primaTrimestral: number;
  primaSemestral: number;
}

export interface Coverage {
  [key: string]: any;
  nombre: string;
  orden: number;
  id: number;
  coberturaId: number;
  prima: number;
  sumaAsegurada: number;
  coaseguro: number;
  deducible: number;
  descuento: number;
  total: number;
}
