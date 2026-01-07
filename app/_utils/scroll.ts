import { MouseEvent } from "react";

export const smoothScrollTo = (
  e: MouseEvent<HTMLAnchorElement | HTMLElement>,
  id: string
) => {
  e.preventDefault();
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
