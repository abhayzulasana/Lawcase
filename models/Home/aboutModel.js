import mongoose from "mongoose";

const aboutCardSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  image: String,
});

const aboutSchema = new mongoose.Schema({
  sectionName: { type: String, required: true, unique: true },
  data: {
    title: String,
    description: String,
    buttonText: String,
    cards: [aboutCardSchema],
  },
  },
{
  timestamps:true
});

const About = mongoose.model("About", aboutSchema, "home");
export default About;
