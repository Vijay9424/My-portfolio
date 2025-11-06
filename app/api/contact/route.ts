import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ContactModel from '@/models/Contact';
import { z } from 'zod';
import { sendEmail } from '@/lib/mail'; // 👈 import email util

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  phone: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const contact = await ContactModel.create(validatedData);

    // ✅ Send email notification
    await sendEmail(validatedData);



    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
