import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    socialLinks: {
      twitter: String,
      facebook: String,
      linkedin: String,
      instagram: String,
    },
  },
  { timestamps: true }
);

const OurTeam = mongoose.models.OurTeam || mongoose.model("OurTeam", teamSchema);
export default OurTeam;
