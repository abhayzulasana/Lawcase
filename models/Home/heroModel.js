import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true
    },
  data: {
    badge: { type: String, required: true },
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    image: { type: String, required: true }
  }
},
{
  timestamps:true

});

const Home = mongoose.model("hero", heroSchema, "home");
export default Home;
