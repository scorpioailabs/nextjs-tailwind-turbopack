import { fetchCategories } from "@/lib/getCategories";
import { Boundary } from "@/lib/boundary";
import ClickCounter from "@/lib/clickCounter";
import React, { use } from "react";
import CategoryNav from '../CategoryNav';

// export function Layout
export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories());
  return (
    <Boundary labels={['Books']} color="blue" animateRendering={false}>
      <div className="space-"
  )
}