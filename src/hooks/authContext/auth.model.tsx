export interface AuthContextModel {
  isLogged: boolean;
  userName: string;
  tokenLafise: string;
  tokenBackend: string;
}

export const initialModelValues: AuthContextModel = {
  isLogged: true,
  userName: "",
  tokenBackend: "",
  tokenLafise: "",
};
