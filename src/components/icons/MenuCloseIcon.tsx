import { SVGProps } from "react";

export const MenuCloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0" 
      version="1.1"
      viewBox="0 0 22 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"></path>
      <path d="M15.5 10l3-3 3 3z"></path>
    </svg>
  );
};
