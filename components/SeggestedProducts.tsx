"use client"
import { Product } from '@/types/Product';
import {ProductCard} from '@/components/index';
import {fetchProducts, fetchProductsByCategory} from "@/app/utils/apiClent";
import {useEffect, useState} from "react";


export function SuggestedItems({ category,nadpis }: { category: string,nadpis:string }) {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const loadProducts = async () => {
            //console.log("Fetching recomended");
            let data:Product[] ;
            if(category)
            {
                data= await fetchProductsByCategory(category,4);
            }
            else{
                data = await fetchProducts(4);

            }
            setProducts(data);

        };

        loadProducts();
    }, []);

    return (
        <section className="container mx-auto px-5 py-8">
            <h2 className="text-2xl font-bold mb-4">{nadpis}</h2>
            <div className="relative">
                <div
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
                    id="carousel"
                >
                    {products.length === 0 && <p>No suggested items available.</p>}

                    {products.map((product:Product) => (
                        <div key={product.id} className="snap-start flex-shrink-0 w-64">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}