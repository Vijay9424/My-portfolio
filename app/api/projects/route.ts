// import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '@/lib/db';
// import ProjectModel from '@/models/Project';

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB();

//     const searchParams = req.nextUrl.searchParams;
//     const page = parseInt(searchParams.get('page') || '1');
//     const limit = parseInt(searchParams.get('limit') || '6');
//     const technology = searchParams.get('technology');
//     const search = searchParams.get('search');

//     const skip = (page - 1) * limit;

//     // Build query
//     const query: any = {};
//     if (technology) {
//       query.technologies = { $in: [technology] };
//     }
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { description: { $regex: search, $options: 'i' } },
//       ];
//     }

//     const projects = await ProjectModel.find(query)
//       .sort({ featured: -1, createdAt: -1 })
//       .skip(skip)
//       .limit(limit)
//       .lean();

//     const total = await ProjectModel.countDocuments(query);

//     return NextResponse.json({
//       success: true,
//       data: { projects, total, page, totalPages: Math.ceil(total / limit) },
//     });
//   } catch (error: any) {
//     console.error('Error fetching projects:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB();

//     const body = await req.json();
//     const project = await ProjectModel.create(body);

//     return NextResponse.json(
//       { success: true, data: project },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     console.error('Error creating project:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }