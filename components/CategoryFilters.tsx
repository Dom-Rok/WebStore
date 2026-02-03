"use client"
import Link from "next/link";
import {useSearchParams, usePathname} from "next/navigation";

export function CategoryFilters({categories}: { categories: string[] }) {
    console.log(categories);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');

    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-fit md:sticky top-4">
            <h3 className="font-bold text-lg mb-4">Kategórie</h3>
            <ul className="space-y-2">
                <li>
                    <Link
                        href="/products"
                        className={`block w-full text-left ${
                            !currentCategory
                                ? 'text-primary font-medium'
                                : 'hover:text-primary'
                        }`}
                    >
                        Všetky
                    </Link>
                </li>
                {categories.map((category) => (
                    <li key={category}>
                        <Link
                            href={`/products?category=${encodeURIComponent(category)}`}
                            className={`block w-full text-left ${
                                currentCategory === category
                                    ? 'text-primary font-medium'
                                    : 'hover:text-primary'
                            }`}
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
