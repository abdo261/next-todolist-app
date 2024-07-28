import { NextResponse } from 'next/server';
import { connectToDB } from '../../../lib/connect';

export const GET = async () => {
  try {
    connectToDB()
    const uri = process.env.MONGO_URI_ATLAS;
    console.log(uri);
    const response = "hello API from next";
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error: any) {
    // Return an error response in case of an exception
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
