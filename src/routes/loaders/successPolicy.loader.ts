import { LoaderFunctionArgs } from "react-router-dom";

export function successPolicyLoader({ request, context, params }: LoaderFunctionArgs) {
  console.log(request);
  console.log(context);
  console.log(params);

  return null;
}
