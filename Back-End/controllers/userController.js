// import User from "../models/userModel.js";

// export const getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// export const addUser = async (req, res) => {
//   try {
//     console.log("✅ addUser hit", req.body); // 👈 log this
//     const { name, email } = req.body;

//     if (!name || !email) {
//       return res.status(400).json({ message: "Name and email are required" });
//     }

//     const newUser = new User({ name, email });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error("❌ Error in addUser:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
};
