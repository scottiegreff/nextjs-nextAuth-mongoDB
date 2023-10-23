import connectMongoDB from "../../../../mongoose";
import Beer from "../../models/beer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async function (req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const body = await req.json();
      const { name } = body;
      await connectMongoDB();
      const beer = await Beer.create({ name });
      console.log("Beer:", beer);
      return new NextResponse("POST request received", { status: 200 });
    } catch (error) {
      return new NextResponse(
        "Error in POSTING BEERS in beers/route.ts: !!!!!!" + error,
        { status: 500 }
      );
    }
  }
};

export const GET = async function (req: NextRequest) {
  if (req.method == "GET") {
    try {
      await connectMongoDB();
      const beer = await Beer.find();
      if (beer) return new NextResponse(JSON.stringify(beer), { status: 200 });
    } catch (error) {
      return new NextResponse(
        "Error in fetching BEERS in beers/route.ts: !!!!!!" + error,
        { status: 500 }
      );
    }
  }
};
