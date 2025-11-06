import mongoose, { Schema, Model } from 'mongoose';
import { Project } from '@/types';

const ProjectSchema = new Schema<Project>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    fullDescription: {
      type: String,
      maxlength: [2000, 'Full description cannot be more than 2000 characters'],
    },
    technologies: {
      type: [String],
      required: [true, 'At least one technology is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Project image URL is required'],
    },
    // NEW: Video support
    videoUrl: {
      type: String,
      match: [/^https?:\/\/.+/, 'Please provide a valid video URL'],
    },
    videoThumbnail: {
      type: String,
    },
    videoType: {
      type: String,
      enum: ['demo', 'tutorial', 'showcase'],
      default: 'demo',
    },
    videoDuration: {
      type: Number,
    },
    githubUrl: {
      type: String,
      required: [true, 'GitHub URL is required'],
      match: [/^https?:\/\/.+/, 'Please provide a valid URL'],
    },
    liveUrl: {
      type: String,
      match: [/^https?:\/\/.+/, 'Please provide a valid URL'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    // NEW: Additional metadata
    category: {
      type: String,
      enum: ['web', 'mobile', 'fullstack', 'frontend', 'backend', 'other'],
      default: 'fullstack',
    },
    highlights: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
ProjectSchema.index({ title: 1 });
ProjectSchema.index({ technologies: 1 });
ProjectSchema.index({ featured: -1, createdAt: -1 });
ProjectSchema.index({ category: 1 });

const ProjectModel: Model<Project> = 
  mongoose.models.Project || mongoose.model<Project>('Project', ProjectSchema);

export default ProjectModel;