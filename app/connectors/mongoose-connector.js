import mongoose from 'mongoose';

export default async (mongoUri) => {
  if (!mongoUri) {
    throw Error('Mongo uri is undefined');
  }
  const mongodb = await mongoose.connect(mongoUri);
  return mongodb;
};
