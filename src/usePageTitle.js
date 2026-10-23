import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `The To! — ${title}` : "The To!";
  }, [title]);
}
