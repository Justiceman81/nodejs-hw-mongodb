import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      require: true,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = mongoose.model('contacts', contactsSchema);
