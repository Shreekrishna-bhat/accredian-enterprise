import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, requirement } = body;

    // Validate required fields
    if (!name || !email || !company || !requirement) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;

    // Select database
    const db = client.db("accredian");

    // Select collection
    const collection = db.collection("enquiries");

    // Save enquiry
    await collection.insertOne({
      name,
      email,
      company,
      requirement,
      createdAt: new Date(),
    });

    console.log("Enquiry saved to MongoDB");

    return NextResponse.json({
      message: "Thanks! Your enquiry has been received.",
    });
  } catch (error) {
    console.error("MongoDB error:", error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}