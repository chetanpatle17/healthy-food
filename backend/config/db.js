import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://17chetanpatle:17chetanpatle@cluster0.fnx9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}


//mongodb+srv://17chetanpatle:17chetanpatle@cluster0.fnx9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0