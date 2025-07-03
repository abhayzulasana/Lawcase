import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  icon: { type: String },
  title: { type: String },
  description: { type: String },
});

const whyChooseUsSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      enum: ["Why_Choose_Us"],
      required: true,
      default: "Why_Choose_Us",
    },
    data: {
      subtitle: { type: String },
      title: { type: String },
      buttonText: { type: String },
      features: [featureSchema],
    },
  },
  { timestamps: true }
);

// ✅ Avoid model overwrite error
const WhyChooseUs =
  mongoose.models.WhyChooseUs ||
  mongoose.model("WhyChooseUs", whyChooseUsSchema, "aboutus");

export default WhyChooseUs;
