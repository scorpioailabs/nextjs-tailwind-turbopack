// generate template using similar code as in shop routegroup
import { Boundary } from "@/ui/Boundary";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
