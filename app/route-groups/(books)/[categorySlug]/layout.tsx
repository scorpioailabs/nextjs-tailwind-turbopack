import {use} from 'react';
import { fetchCategoryBySlug, PageProps } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';

export default function Layout({ children, params }: PageProps) {
    const category = use(fetchCategoryBySlug(params.categorySlug));
    return (
        <div className="text-2xl font-bold">
        <div className="flex items-center justify-between">
            <ClickCounter />
        </div>
        <div>
            {children}
        </div>
        </div>
    );
}