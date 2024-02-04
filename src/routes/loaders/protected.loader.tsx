import { LoaderFunctionArgs } from "react-router-dom";

export function protectedLoader(props: LoaderFunctionArgs) {
  console.log(props);
  return null;
}
