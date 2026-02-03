import type { NextApiRequest, NextApiResponse } from 'next';
import {baseApiUrl,fetchData} from "./../../ApiGlobals";
import {NextResponse} from "next/server";

export async function GET () {
    const specificUrl = `${baseApiUrl}/products/categories`;
    console.log(specificUrl);
    try {
        const result = await fetchData<string[]>(specificUrl)
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

