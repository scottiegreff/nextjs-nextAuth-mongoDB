import { NextResponse, NextRequest } from 'next/server';
import React from 'react';
import mongoose from 'mongoose';

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = process.env.MONGODB_URI;
}