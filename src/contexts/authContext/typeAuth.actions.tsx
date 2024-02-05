import { AuthContextModel } from "@/contexts/authContext/auth.model";

export type TypeAuthActions =
  | {
      type: "login";
      payload: { tokenLafise: string; tokenBackend: string };
    }
  | { type: "logout" }
  | { type: "load"; payload: AuthContextModel };
