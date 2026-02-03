import { NextResponse } from 'next/server';
import {baseApiUrl, fetchData} from "./../ApiGlobals"
import {Product} from "@/types/Product";


const ApiUrl = baseApiUrl+"/products/";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
    let specificUrl = `${baseApiUrl}/products`;
    var result;
    const queryParams: Record<string, string> = {};

    if (limit) {
        specificUrl += `?limit=${encodeURIComponent(limit)}`
    }
    try {
        const result = await fetchData<Product[]>(specificUrl)
        return NextResponse.json(result);
    } catch (err) {
        let message = 'Unknown error';
        if (err instanceof Error) {
            message = err.message;
        }
        return NextResponse.json(
            { error: 'Failed to fetch categories:'+message },
            { status: 500 }
        );
    }
}

