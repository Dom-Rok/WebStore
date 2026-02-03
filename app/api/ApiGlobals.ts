import {NextResponse} from "next/server";

export const baseApiUrl = "https://fakestoreapi.com";

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
}

