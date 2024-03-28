import { useOutletContext } from "react-router-dom";

export function useHeaderLayout() {
  return useOutletContext<{ setTitleHeader: (value: string) => void }>();
}
