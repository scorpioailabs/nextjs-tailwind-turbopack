import { fetchCategories } from "@/lib/getCategories";
import { Boundary } from "@/ui/Boundary";
import ClickCounter from "@/ui/ClickCounter";
import React, { use } from "react";
import CategoryNav from '../CategoryNav';

// export function Layout
export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories());
  return (
    <Boundary labels={['books layout']} color="blue" animateRerendering={false}>
      <div className="text-2xl font-bold">
        <div className="flex items-center justify-between">
          <CategoryNav categories={categories} />
          <ClickCounter />
        </div>
        <div>
          {children}
        </div>
      </div>
    </Boundary>
  );
}