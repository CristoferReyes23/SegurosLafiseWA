import {
  AuthDispatchContext,
  AuthenticationModelContext,
} from "./auth.context";
import { initialModelValues } from "./auth.model";
import { authReducer } from "./auth.reducer";
import { useReducer } from "react";

const AuthWrapper = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    ...initialModelValues,
  });

  return (
    <AuthenticationModelContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthenticationModelContext.Provider>
  );
};

export default AuthWrapper;
