"use client"
import Navbar from '@/components/NavBar';
import {Product} from '@/types/Product';
import {RatingIndicator} from "@/components";
import {SuggestedItems} from "@/components/SeggestedProducts";
import {fetchProduct} from "@/app/utils/apiClent";
import {Suspense, useEffect, useState} from "react";
import Link from "next/link";
import Loading from "@/app/products/[productId]/pageSkeleton";
import ProductPageSkeleton from "@/app/products/[productId]/pageSkeleton";


export default function ProductDetailsPage({params}: { params: Promise<{ productId: number }> }) {


    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const {productId} = await params;
            //await new Promise(resolve => setTimeout(resolve,2000));
            const data = await fetchProduct(productId);
            console.log("fetching");
            setProduct(data);
        }
        fetchData();

    }, []);
    if (!product) {
        return (<ProductPageSkeleton/>);
    } else
        return (
            RenderProduct(product)
        );

}

function RenderProduct(product: Product) {
    console.log(product);
    return (
        <>
            <div className="container mx-auto text-gray-400 [&>span:last-child]:underline">
                <span>Produkty&#62;</span>
                <span className=""><Link
                    href={`/products?category=${product.category}`}>{product.category}</Link></span>
            </div>
            <div className="container bg-white mx-auto flex p-5 justify-center">

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">

                    <div className="flex-shrink-0 md:w-[40%] w-full flex justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="object-contain max-h-[400px] w-auto"/>
                    </div>
                    <div className="md:w-[60%] w-full ">
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <p className="mt-4">{product.description}</p>
                        <p className="mt-3 text-sm text-gray-600">Category: {product.category}</p>
                        <RatingIndicator rating={product.rating}/>
                        <p className="mt-3 text-primary text-2xl">${product.price.toFixed(2)}</p>
                        <div className="mt-6 flex justify-end"> {/* Flex container for alignment */}
                            <button
                                className="bg-white border-solid border-1 border-color-gray-200 shadow-md hover:bg-[#ff4100] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                                <p className="text-black">Do košíka</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <SuggestedItems category={product.category} nadpis={"Ľudia tiež kupujú"}/></>
    )
        ;
}