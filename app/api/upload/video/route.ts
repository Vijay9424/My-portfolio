// import { NextRequest, NextResponse } from 'next/server';
// import { v2 as cloudinary } from 'cloudinary';

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get('video') as File;

//     if (!file) {
//       return NextResponse.json(
//         { success: false, error: 'No video file provided' },
//         { status: 400 }
//       );
//     }

//     // Convert File to buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Upload to Cloudinary
//     const result = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         {
//           resource_type: 'video',
//           folder: 'portfolio-projects',
//           transformation: [
//             { quality: 'auto', fetch_format: 'auto' },
//             { width: 1280, height: 720, crop: 'limit' },
//           ],
//         },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );

//       uploadStream.end(buffer);
//     });

//     return NextResponse.json({
//       success: true,
//       data: {
//         url: (result as any).secure_url,
//         publicId: (result as any).public_id,
//         thumbnail: (result as any).secure_url.replace('/upload/', '/upload/so_0/'),
//         duration: (result as any).duration,
//       },
//     });
//   } catch (error: any) {
//     console.error('Upload error:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }