export interface AuthContextModel {
  isLogged: boolean;
  userName: string;
  tokenLafise: string;
  tokenBackend: string;
}

export const initialModelValues: AuthContextModel = {
  isLogged: false,
  userName: "",
  tokenBackend: "",
  tokenLafise: "",
};
