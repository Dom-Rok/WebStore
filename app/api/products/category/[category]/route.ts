import {baseApiUrl,fetchData} from "../../../ApiGlobals";
import {NextResponse} from "next/server";
import {Product} from "@/types/Product";

    export async function GET(  request: Request,
                                { params }: { params: { category: string } }) {
        const {category} = await params;
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')

    let specificUrl = `${baseApiUrl}/products/category/${encodeURIComponent(category)}`;
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