import Home from "../models/Home/heroModel.js";
import About from "../models/Home/aboutModel.js";
import Process from "../models/Home/processModel.js";
import Testimonial from "../models/Home/testimonialModel.js";
import FAQ from "../models/Home/faqModel.js";
import Blog from "../models/Home/blogModel.js";

export const isHeroSectionExists = async () => {
  return await Home.findOne({ sectionName: "hero" });
};

export const saveHeroSection = async (data) => {
  const hero = new Home(data);
  return await hero.save();
};

// Find hero section by sectionName
export const findHeroBySection = async () => {
  return await Home.findOne({ sectionName: "hero" });
};

// Find hero by ID
export const findHeroById = async (id) => {
  return await Home.findById(id);
};

// Delete by sectionName
export const deleteHeroBySection = async () => {
  return await Home.deleteOne({ sectionName: "hero" });
};

// Delete by ID
export const deleteHeroById = async (id) => {
  return await Home.findByIdAndDelete(id);
};

// ABOUT US Section

// Find About section by sectionName
export const findAboutSection = async () => {
  return await About.findOne({ sectionName: "about" });
};

// Find About section by ID
export const findAboutByid = async (id) => {
  return await About.findById(id);
};
export const createAboutSectionInDB = async (data) => {
  const newSection = new About({ sectionName: "about", data });
  return await newSection.save();
};

// Delete by sectionName
export const deleteAboutBySection = async (id) => {
  return await About.deleteOne({ sectionName: "about" });
};

//delete by ID
export const deleteAboutById = async (id) => {
  return await About.findByIdAndDelete(id);
};

//update about section by ID
export const updateAboutSectionInDB = async (id, updatedData) => {
  return await About.findByIdAndUpdate(
    id,
    { data: updatedData },
    { new: true }
  );
};

//Process
//save Process
export const saveProcess = async (data) => {
  const step = new Process({ sectionName: "process", data });
  return await step.save();
};

export const getAllProcess = async () => {
  return await Process.find({ sectionName: "process" }); // ✅ correct model
};
export const findProcessById = async (id) => {
  return await Process.findById(id);
};

export const deleteProcessById = async (id) => {
  return await Process.findByIdAndDelete(id);
};

export const updateProcessById = async (id, newData) => {
  return await Process.findByIdAndUpdate(id, { data: newData }, { new: true });
};
export const deleteAllProcess = async () => {
  return await Process.deleteMany({ sectionName: "process" });
};

//Testimonials
//save
export const saveTestimonial = async (data) =>
  await new Testimonial(data).save();

export const getAllTestimonials = async () =>
  await Testimonial.find({ sectionName: "testimonials" });

export const getTestimonialById = async (id) => await Testimonial.findById(id);

export const updateTestimonialById = async (id, updatedData) => {
  await Testimonial.findByIdAndUpdate(id, updatedData, { new: true });
};

export const deleteAllTestimonials = async () =>
  await Testimonial.deleteMany({ sectionName: "testimonials" });

export const deleteTestimonialById = async (id) =>
  await Testimonial.findByIdAndDelete(id);

//FAQ
export const saveFaq = async (data) => await new FAQ(data).save();
export const getAllFaqs = async () => await FAQ.find({ sectionName: "faq" });
export const findFaqById = async (id) => await FAQ.findById(id);
export const updateFaqInDB = async (id, updatedData) => {
  return await FAQ.findByIdAndUpdate(id, { data: updatedData }, { new: true });
};
export const deleteFaqById = async (id) => await FAQ.findByIdAndDelete(id);
export const deleteAllFaqs = async () =>
  await FAQ.deleteMany({ sectionName: "faq" });

//BLOGS
export const saveBlog = async (data) => await new Blog(data).save();
export const getAllBlogsService = async () =>
  await Blog.find({ sectionName: "blogs" });
export const getBlogByIdService = async (id) => await Blog.findById(id);
export const deleteAllBlogs = async () => {
  await Blog.deleteMany({ sectionName: "blogs" });
};
export const deleteBlogByIdService = async (id) =>
  await Blog.findByIdAndDelete(id);

