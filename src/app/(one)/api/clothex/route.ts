import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Parse query parameters for pagination
    const url = new URL(req.url);
    const itemPage = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1
    const itemLimit = parseInt(url.searchParams.get("limit") || "30", 30); // Default to 10 items per page
    const offset = (itemPage - 1) * itemLimit; // Calculate the starting point

    // Fetch total count of products
    // const totalItems = await client.fetch(`count(*[_type == "productlist"])`);
    // const totalPages = Math.ceil(totalItems / itemLimit); // Total number of pages

    // Fetch paginated products ordered by id
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

    // Return paginated response
    return NextResponse.json(
   clothBuck,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `${error} : failed to fetch the products` },
      { status: 500 }
    );
  }
}
