import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { saveProductToDB } from "@/lib/entities/Product/db/createProductInDB";

export async function POST(request: NextRequest) {
  try {
    const productFormData = await request.formData();

    const prisma = new PrismaClient();
    await saveProductToDB(productFormData, prisma);

    return NextResponse.json({ message: "Product created" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
