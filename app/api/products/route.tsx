import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const products = [
  { id: 1, name: "Milk", price: 2.5 },
  { id: 2, name: "Bread", price: 3.5 },
];

export function GET(request: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newProduct = {
    id: products[products.length - 1].id + 1,
    ...body,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct);
}
