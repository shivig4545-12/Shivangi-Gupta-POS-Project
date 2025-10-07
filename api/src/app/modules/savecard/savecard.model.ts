import mongoose, { Schema } from 'mongoose';
import { ISaveCard } from './savecard.interface';

const SaveCardSchema: Schema = new Schema(
  {
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true 
    },
    
    cardNumber: { 
      type: String, 
      required: true,
      trim: true
    },
    expiryDate: { 
      type: String, 
      required: true,
      trim: true
    },
    cvv: { 
      type: String, 
      required: true,
      trim: true
    },
    nameOnCard: { 
      type: String, 
      required: true,
      trim: true
    },
    isDefault: {
      type: Boolean,
      default: false
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
        // Mask card number for security
        if (ret.cardNumber) {
          ret.cardNumber = '****' + ret.cardNumber.slice(-4);
        }
        // Remove CVV from response
        delete ret.cvv;
        
        ret.createdAt = new Date(ret.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        ret.updatedAt = new Date(ret.updatedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      }
    }
  }
);

export const SaveCard = mongoose.model<ISaveCard>('SaveCard', SaveCardSchema);