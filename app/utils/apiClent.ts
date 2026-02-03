"use client"
import { Product } from "@/types/Product";


export async function fetchProducts(limit?: number): Promise<Product[]> {
    const query = limit ? `?limit=${limit}` : '';
    const res = await fetch(`/api/products${query}`);
    return res.ok ? await res.json() : [];
}

export async function fetchProduct(productId: number): Promise<Product> {
    const res = await fetch(`/api/products/${productId}`);
    if (!res.ok) throw new Error('Product not found');
    return await res.json();
}

export async function fetchProductsByCategory(category: string, limit?: number): Promise<Product[]> {

    const query = limit ? `?limit=${limit}` : "";
    const res = await fetch(`/api/products/category/${category}${query}`);
    return res.ok ? await res.json() : [];
}

export async function fetchCategories(): Promise<string[]> {
    const res = await fetch(`/api/products/categories`);
    return res.ok ? await res.json() : [];
}