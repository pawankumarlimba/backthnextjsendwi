import { connect } from '@/dbConfig/dbConfig';
import { getUserData } from '@/helpers/getUserData';
import Admin from '@/models/adminModel';
import Design from '@/models/designModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserData(request);
    const admin = await Admin.findById(userId);
    if (!admin) {
      return NextResponse.json({ error: 'login as Admin' }, { status: 400 });
    }
    const reqBody = await request.json();
    const { name, url, category, description, price } = reqBody;

    const design = await Design.findOne({ name });
    if (design) {
      return NextResponse.json(
        { error: 'Design already exist' },
        { status: 400 }
      );
    }

    const newDesign = new Design({
      name,
      url,
      category,
      description,
      price,
    });

    const savedDesign = await newDesign.save();
    // console.log(savedDesign);

    return NextResponse.json({
      message: 'Design created successfully',
      success: true,
      savedDesign,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
