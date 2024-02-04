import { AuthApi } from "@/apis/auth.api";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const a = url.searchParams.get("a");
  const b = url.searchParams.get("b");
  if (!a || !b) return redirect("/unauthorized");

  const result = await AuthApi.ValidateQueryParams(a, b);
  let isValid = result.isValid % 2 == 0;

  if (!isValid) return redirect("/unauthorized");

  return {
    isValid,
  };
}
