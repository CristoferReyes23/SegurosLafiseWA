export interface PolicyListModel {
  id: number;
  placa: string;
  brand: string;
  model: string;
  year: string;
  createdAt: string;
  [key: string]: any;
}

export interface PolicyListResponseModel {
  data: PolicyListModel[];
  isOk: boolean;
  clientExist: boolean;
}
