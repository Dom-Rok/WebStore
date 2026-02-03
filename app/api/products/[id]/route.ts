import {baseApiUrl,fetchData} from "../../ApiGlobals";
import {NextResponse} from "next/server";
import {Product} from "@/types/Product";

export async function GET(request:Request,{ params }: { params: { id: number } }) {
    const id = params.id;
    let specificUrl = `${baseApiUrl}/products/${id}`;

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