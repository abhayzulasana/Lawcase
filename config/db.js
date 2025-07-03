// import mongoose from "mongoose"

// const ConnectDB = async () =>{
//     try{
//         await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//         });
//         console.log("MongoDB Connected");
//     }
//     catch(err){
//         console.error("MongoDB err:", err);
//         process.exit(1)
//     }
// }
// export default ConnectDB;
// config/db.js
import mongoose from 'mongoose';

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // no options needed
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default ConnectDB;
