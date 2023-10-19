import connectMongoDB from "../../../../../mongoose"
import Culture from "../../../models/selectCulture"
import { NextRequest, NextResponse } from "next/server";
 

export const GET = async (request: any) => {
 try {
    await connectMongoDB();
    const culture = await Culture.find();
    return new NextResponse(JSON.stringify(culture), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error in fetching Artist in selectedCulture/route.ts: !!!!!!" + error,
      { status: 500 }
    );
  }
};