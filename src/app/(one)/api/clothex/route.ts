import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// CORS middleware function
function setCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "https://fabrichaven.vercel.app/"); // Allow all origins (update as per your requirement)
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
}
// function setCorsHeaders(response: NextResponse) {
//   const allowedOrigins = ["http://localhost:3000", "https://fabrichaven.vercel.app"];
//   const origin = response.headers.get("Origin");

//   if (allowedOrigins.includes(origin as string)) {
//     response.headers.set("Access-Control-Allow-Origin", origin as string);
//   }
//   response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type");
// }


// API handler
export async function GET(req: NextRequest) {
  try {
    // Parse query parameters for pagination
    const url = new URL(req.url);
    const itemPage = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1
    const itemLimit = parseInt(url.searchParams.get("limit") || "30", 10); // Default to 30 items per page
    const offset = (itemPage - 1) * itemLimit; // Calculate the starting point

    // Fetch paginated products from Sanity
    const clothBuck = await client.fetch(
      `*[_type == "productlist"] | order(id asc) [${offset}...${offset + itemLimit}]{
        productname,
        "productimg": productimg.asset->url,
        category,
        description,
        stock,
        discount,
        id,
        rating,
        price,
        productsizes,
        productcolors,
        tags,
        createdAt,
        updatedAt,
      }`
    );

    // Create a response and set CORS headers
    const response = NextResponse.json(clothBuck, { status: 200 });
    setCorsHeaders(response);
    return response;
  } catch (error) {
    // Handle errors with CORS headers
    const errorResponse = NextResponse.json(
      { error: `${error} : failed to fetch the products` },
      { status: 500 }
    );
    setCorsHeaders(errorResponse);
    return errorResponse;
  }
}

// Handle OPTIONS method for preflight requests
export async function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}
