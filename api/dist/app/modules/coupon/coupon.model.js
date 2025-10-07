"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CouponSchema = new mongoose_1.Schema({
    couponCode: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    maxDiscountAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    minOrderAmount: {
        type: Number,
        default: 0,
    },
    validFrom: {
        type: Date,
        required: true,
    },
    validUntil: {
        type: Date,
        required: true,
    },
    usageLimit: {
        type: Number,
        required: true,
        min: 1,
    },
    usagePerUser: {
        type: Number,
        default: 1
    },
    totalUses: {
        type: Number,
        default: 0,
    },
    usedBy: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        }],
    isActive: {
        type: Boolean,
        default: true,
    },
    vendorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    restaurantId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
}, {
    timestamps: true,
});
CouponSchema.index({ vendorId: 1, couponCode: 1 }, { unique: true });
exports.Coupon = mongoose_1.default.model('Coupon', CouponSchema);
