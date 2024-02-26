export interface PolicyListModel {
  id: string;
  placa: string;
  brand: string;
  model: string;
  year: string;
  createdAt: string;
  [key: string]: string;
}

export interface PolicyListResponseModel {
  data: PolicyListModel[];
  isOk: boolean;
  clientExist: boolean;
}
