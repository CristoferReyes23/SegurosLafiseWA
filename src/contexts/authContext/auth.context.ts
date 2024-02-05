import { AuthContextModel, initialModelValues } from "./auth.model";
import { Dispatch, createContext, useContext } from "react";
import { TypeAuthActions } from "./typeAuth.actions";

export const AuthenticationModelContext = createContext<AuthContextModel>({
  ...initialModelValues,
});

export const AuthDispatchContext = createContext<Dispatch<TypeAuthActions>>(
  () => {}
);

export const useAuthStateContext = () => useContext(AuthenticationModelContext);
export const useAuthDispatchContext = () => useContext(AuthDispatchContext);
