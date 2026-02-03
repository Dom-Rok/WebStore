"use client"
import {CategoryFilters, ProductCard} from "@/components";
import {Product} from "@/types/Product";
import {fetchProducts, fetchProductsByCategory,fetchCategories} from "@/app/utils/apiClent";
import {useEffect, useState} from "react";
import pageSkeleton from "@/app/products/pageSkeleton";
import PageSkeleton from "@/app/products/pageSkeleton";
import Image from "next/image";
import sadFace from "@/public/free-sad.png"

export default function ProductsPage({searchParams}: {
    searchParams: { [key: string]: string | undefined }
}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const {category} = await searchParams;
            var products;
            if(category)
                products = await fetchProductsByCategory(category);
            else
                products = await fetchProducts();
            const categories = await fetchCategories();
            setProducts(products);
            setCategories(categories);
        }
        fetchData();
    }, [searchParams]);

    useEffect(() => {
        const fetchCategories = async()=>{

        }
    }, []);

    if (!products) {
        return (<PageSkeleton/>)
    }

    return (
        <main className="container max-w-screen-desktop mx-auto px-5 2xl:px-0">
            <div className="flex md:flex-row flex-col justify-between">
                <CategoryFilters categories={categories}/>
                <div
                    className="w-full grid md:pl-5 pt-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {products &&products.length==0 &&<><Image src={sadFace} alt=""/> <p>Niekde nastala chyba. Skúste načitať znova.</p> </> }
                    {products.length > 0 && (
                        products.map((product: Product) => (
                            <ProductCard {...product} key={product.id}/>
                        ))
                    )}
                </div>
            </div>
        </main>


    );
}
