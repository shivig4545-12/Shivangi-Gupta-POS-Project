import mongoose, { Schema } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema: Schema = new Schema(
  {
    title: { 
      type: String, 
      required: true,
      unique: true,
      trim: true
    },
    image: { 
      type: String, 
      required: true 
    },
    isDeleted: { 
      type: Boolean, 
      default: false 
    },
  },
  { 
    timestamps: true,
    toJSON: { 
      transform: function(doc, ret:any) {
        ret.createdAt = new Date(ret.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        ret.updatedAt = new Date(ret.updatedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      }
    }
  }
);

export const Category = mongoose.model<ICategory>('Category', CategorySchema);
