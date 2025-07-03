import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
icon: { type: String },
title: { type: String },
description: { type: String },
});

const whyChooseUsSchema = new mongoose.Schema({
sectionName: {
type: String,
enum: ["Why_Choose_Us"],
default: "Why_Choose_Us",
required: true,
},
data: {
subtitle: { type: String },
title: { type: String },
buttonText: { type: String },
features: [featureSchema],
},
}, { timestamps: true });

const WhyChooseUs = mongoose.model("WhyChooseUs", whyChooseUsSchema, "aboutus");
export default WhyChooseUs;