// pages/api/selects.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
import connectMongoDB from "../../../../../mongoose"
import Artist from "../../../models/selectArtist"
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    await connectMongoDB();
    const artist = await Artist.find();

    return new NextResponse(JSON.stringify(artist), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error in fetching Artist in selectedArtists/route.ts: !!!!!!" + error,
      { status: 500 }
    );
  }
 
};
