// import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '@/lib/db';
// import ProjectModel from '@/models/Project';

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const project = await ProjectModel.findByIdAndUpdate(
//       params.id,
//       { $inc: { viewCount: 1 } },
//       { new: true }
//     ).lean();

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: 'Project not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: project });
//   } catch (error: any) {
//     console.error('Error fetching project:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const body = await req.json();
//     const project = await ProjectModel.findByIdAndUpdate(
//       params.id,
//       body,
//       { new: true, runValidators: true }
//     ).lean();

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: 'Project not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: project });
//   } catch (error: any) {
//     console.error('Error updating project:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const project = await ProjectModel.findByIdAndDelete(params.id);

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: 'Project not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: null });
//   } catch (error: any) {
//     console.error('Error deleting project:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// This route is currently disabled
export const runtime = 'edge'; // dummy export to make it a valid module
