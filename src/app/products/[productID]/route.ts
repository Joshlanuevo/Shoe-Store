import { NextResponse } from "next/server";
import products from "./product.json";

export async function GET(request) {
    return NextResponse.json(products);
}

// export async function POST(request) {
//     const { id, name, price, currency, colors, sizes, image } = await request.json();

//     const newProduct = {
//         id,
//         name,
//         price,
//         currency,
//         colors,
//         sizes,
//         image
//     }

//     products.push(newProduct);

//     return NextResponse.json(products);
// }