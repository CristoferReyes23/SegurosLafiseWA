import { AuthContextModel } from "./auth.model";
import { TypeAuthActions } from "./typeAuth.actions";

export function authReducer(
  state: AuthContextModel,
  action: TypeAuthActions
): AuthContextModel {
  switch (action.type) {
    case "login":
      return {
        ...state,
        ...action.payload,
        isLogged: true,
      };

    default:
      return state;
  }
}
