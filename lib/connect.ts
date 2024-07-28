import { connect } from 'mongoose';

export const connectToDB = async () => {
  const uri: string = process.env.MONGO_ATLAS!;

  try {
    await connect(uri);
    console.log('Connected to MongoDB Good');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};
