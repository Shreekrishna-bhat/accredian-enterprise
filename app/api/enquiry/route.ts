import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, requirement } = body;
    if (!name || !email || !company || !requirement) {
      return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
    }
    console.log('Enterprise enquiry:', { name, email, company, requirement, createdAt: new Date().toISOString() });
    return NextResponse.json({ message: 'Thanks! Your enquiry has been received.' });
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }
}
