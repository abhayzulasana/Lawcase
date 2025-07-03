import { error } from "console";
import Homemain from "../models/Home/HomeModel.js";
import Home from "../models/Home/heroModel.js";
import { deleteImage } from "../utils/Utils.js";
//all validation
import { validateHeroInput, validateServicesValidation,ProcessValidation,testimonialValidation,faqValidation,validateBlog } from "../validations/homeValidation.js";
//Hero swction
import {
  isHeroSectionExists,
  saveHeroSection,
} from "../services/homeService.js";
import {
  findHeroBySection,
  findHeroById,
  deleteHeroBySection,
  deleteHeroById,
} from "../services/homeService.js";

//About Section import
import About from "../models/Home/aboutModel.js";
import {
  findAboutSection,
  findAboutByid,
  updateAboutSectionInDB,
  deleteAboutById,
  deleteAboutBySection,
} from "../services/homeService.js";
import {validateAboutUpdate } from "../validations/homeValidation.js";

//service Section import
import Service from "../models/Home/ServiceModel.js"

//Process
import { saveProcess,getAllProcess,findProcessById,deleteProcessById,updateProcessById,deleteAllProcess} from "../services/homeService.js";
import Process from "../models/Home/processModel.js";

//Testimonials
import { saveTestimonial,getAllTestimonials,getTestimonialById,deleteAllTestimonials,deleteTestimonialById } from "../services/homeService.js";
import Testimonial from "../models/Home/testimonialModel.js";

//FAQ
import {
  saveFaq,
  getAllFaqs,
  findFaqById,
  updateFaqInDB,
  deleteFaqById,
  deleteAllFaqs,
} from "../services/homeService.js";
import {  } from "../validations/homeValidation.js";

//BLOGS
import {
  saveBlog,
  getAllBlogsService,
  getBlogByIdService,
  deleteAllBlogs,
  deleteBlogByIdService,
} from "../services/homeService.js";
import Blog from "../models/Home/blogModel.js";

import path from "path";
import fs from "fs";

export const getHeroSection = async (req, res) => {
  try {
    const section = await Home.find({ sectionName: "hero" });
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch hero section" });
  }
};
export const createHeroSectionWithImage = async (req, res) => {
  try {
    const { badge, heading, subheading, description, buttonText, buttonLink } =
      req.body;

    const existing = await isHeroSectionExists();
    if (existing) {
      if (req.file) deleteImage(req.file.filename);
      return res.status(400).json({ error: "Hero section already exists." });
    }

    if (!validateHeroInput(req.body)) {
      if (req.file) deleteImage(req.file.filename);
      return res.status(400).json({ error: "All text fields are required." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    const newHero = {
      sectionName: "hero",
      data: {
        badge,
        heading,
        subheading,
        description,
        buttonText,
        buttonLink,
        image: imagePath,
      },
    };

    const savedHero = await saveHeroSection(newHero);

    res.status(201).json({
      message: "Hero section created successfully",
      data: savedHero,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create hero section", message: err.message });
  }
};
export const deleteHeroSection = async (req, res) => {
  try {
    const hero = await findHeroBySection();
    if (!hero) {
      return res.status(404).json({ error: "Hero section not found." });
    }

    await deleteImage(hero.data?.image);
    await deleteHeroBySection();

    res
      .status(200)
      .json({ message: "Hero section and image deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete hero section", message: err.message });
  }
};

export const deleteHeroSectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const hero = await findHeroById(id);
    if (!hero) {
      return res.status(404).json({ error: "Hero section not found by ID." });
    }

    await deleteImage(hero.data?.image);
    await deleteHeroById(id);

    res
      .status(200)
      .json({ message: "Hero section and image deleted by ID successfully." });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Failed to delete hero section by ID",
        message: err.message,
      });
  }
};

// About Us Section
export const getAboutSection = async (req, res) => {
  try {
    const about = await findAboutSection();
    if (!about)
      return res.status(404).json({ error: "About section not found" });
    res.status(200).json(about);
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

const deleteUploadedFiles = async (files) => {
  if (!files) return;

  for (let key in files) {
    for (let file of files[key]) {
      const fullPath = path.join("uploads", file.filename);
      try {
        await fs.promises.unlink(fullPath);
        console.log("🗑️ Deleted image:", fullPath);
      } catch (err) {
        console.error("❌ Error deleting file:", err.message);
      }
    }
  }
};

export const createAboutSection = async (req, res) => {
  try {
    console.log("🧾 Request Body:", req.body);
    console.log("📂 Uploaded Files:", req.files);

    const { title, description, buttonText } = req.body;

    // ✅ Parse cards JSON string from form-data text field
    const cards = JSON.parse(req.body.cards);

    // 🔍 Validate main fields
    if (!title || !description || !buttonText || !cards || cards.length !== 3) {
      await deleteUploadedFiles(req.files);
      return res
        .status(400)
        .json({ error: "All main fields and cards are required." });
    }

    // 🔍 Validate each card
    const formattedCards = [];
    for (let i = 0; i < cards.length; i++) {
      const { icon, title, description } = cards[i];
      const imageFile = req.files[`cards[${i}][image]`];

      if (!icon || !title || !description || !imageFile) {
        await deleteUploadedFiles(req.files);
        return res.status(400).json({ error: "All card fields are required." });
      }

      formattedCards.push({
        icon,
        title,
        description,
        image: ` /uploads/${imageFile[0].filename}`,
      });
    }

    // ✅ Save to DB
    const about = new About({
      sectionName: "about",
      data: {
        title,
        description,
        buttonText,
        cards: formattedCards,
      },
    });

    const saved = await about.save();
    res.status(201).json({ message: "About section created", data: saved });
  } catch (err) {
    await deleteUploadedFiles(req.files);
    res
      .status(500)
      .json({ error: "Failed to create about section", message: err.message });
  }
};

export const updateAboutSection = async (req, res) => {
  try {
    const { id } = req.params;
    const about = await findAboutByid(id);
    if (!about) {
      return res.status(404).json({ error: "About section not found." });
    }

    const { title, description, buttonText, cards } = req.body;

    // ✅ Validation for fields (only if provided)
    const validationError = validateAboutUpdate({ title, description, buttonText });
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // ✅ Update main fields if provided
    if (title) about.data.title = title;
    if (description) about.data.description = description;
    if (buttonText) about.data.buttonText = buttonText;

    // ✅ Update card fields (JSON string via form-data)
    if (cards) {
      const parsedCards = JSON.parse(cards);
      if (Array.isArray(parsedCards)) {
        for (let i = 0; i < parsedCards.length; i++) {
          const card = parsedCards[i];
          if (!about.data.cards[i]) continue;

          if (card.title) about.data.cards[i].title = card.title;
          if (card.description) about.data.cards[i].description = card.description;
          if (card.icon) about.data.cards[i].icon = card.icon;
        }
      }
    }

    // ✅ Update card images if uploaded
    for (let i = 0; i < 3; i++) {
      const file = req.files?.[`cards[${i}][image]`]?.[0];
      if (file) {
        await deleteImage(about.data.cards[i]?.image);
        about.data.cards[i].image = `/uploads/${file.filename}`;
      }
    }

    // ✅ Save updated document
    const updated = await updateAboutSectionInDB(id, about.data);

    res.status(200).json({
      message: "About section updated successfully.",
      updated,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to update About section.",
      message: err.message,
    });
  }
};

export const deleteAboutSection = async (req, res) => {
  try {
    console.log("🧾 Request Body:", req.body);
    console.log("📂 Uploaded Files:", req.files);

    const about = await findAboutSection();
    if (!about) {
      return res.status(404).json({ error: "About section not found." });
    }
    if(Array.isArray(about.data?.cards)){
      for(const cards of about.data?.cards){
        await deleteImage(cards.image);
      }
      }
    await deleteAboutBySection();
    res
      .status(200)
      .json({ message: "About section and image(s) deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete about section", message: err.message });
  }
};
export const deleteAboutSectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const about =await findAboutByid(id);
    if (!about) {
      return res.status(404).json({ error: "about section not found by ID." });
    }
    if(Array.isArray(about.data?.cards)){
      for(const cards of about.data?.cards){
        await deleteImage(cards.image);
      }
      }
    await deleteAboutById(id);
    res
      .status(202)
      .json({ message: "About Section and Image deleted successfully by ID." });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Failed to Delete About Section By ID.",
        message: err.message,
      });
  }
};

//Services Section
// export const createService=async (req,res)=>{
//   try{
//     const {number , title , description}=req.body;
//     const imageUrl = req.file? `/uploads/${req.file.filename}`:null;

//     const error=validateServicesValidation({number , title , description});
//     if(error) return res.status(400).json({success:false, message:error});
//     if (!imageUrl) return res.status(400).json({ success: false, message: "Image is required." });
   
//     const serviced = new Service({number , title , description , imageUrl});
//     await service.save();
//     res.status(201).json({success:true,data :service});
//   }catch (error){
//     res.status(500).json({success:false , message:error.message});
//   }
// };

export const createService = async (req, res) => {
  try {
    const { number, title, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const error = validateServicesValidation({ number, title, description });
    if (error) return res.status(400).json({ success: false, message: error });
    if (!imageUrl) return res.status(400).json({ success: false, message: "Image is required." });

    const serviceDoc = new Homemain({
      sectionName: "services",
      data: {
        number,
        title,
        description,
        image: imageUrl
      }
    });

    await serviceDoc.save();

    res.status(201).json({ success: true, message: "Service saved in home collection", data: serviceDoc });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllServices = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const query = {
      title: { $regex: search, $options: "i" },
    };

    const services = await Service.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Service.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      data: services,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get single service
export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: "Service not found" });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update service
export const updateService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete service
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Service deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Process
//Create
export const createProcess=async (req,res)=>{
  try{
    const {number,title,description}=req.body;
    const image=req.file? `/uploads/${req.file.filename}`:null;

    const error=ProcessValidation({number,title,description});
    if(error){
      if(req.file)await deleteImage(`uploads/${req.file.filename}`);
      return res.status(400).json({success:false,message:error});
    }
    const exists=await Process.findOne({sectionName:"process","data.number":number,});
    if(exists){
      if(req.file)await deleteImage(req.file.filename);
      return res.status(400).json({success:false,message:"number already exists."});
    }
    if(!image) return res.status(400).json({success:false,message:"image is required"});

    const saved=await saveProcess({number,title,description,image});
    res.status(201).json({success:true,data:saved});
  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
}

export const getprocess=async(req,res)=>{
  try{
    const step =await getAllProcess();
    if (!step)
      return res.status(404).json({ error: "Process section not found" });
    res.status(200).json({success:true,data:step});
  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
};

export const getprocessById=async(req,res)=>{
  try{
    const {id}=req.params;
    const process=await findProcessById(id);
    if(!process){
      return res.status(404).json({success:false,message:"Process not Found."});
    }
    res.status(200).json({success:true,message:process});
  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
};

export const updateProcess = async (req, res) => {
  try {
    const { id } = req.params;
    const { number, title, description } = req.body;

    const existing = await findProcessById(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: "Process not found." });
    }

    if (req.file) {
      await deleteImage(existing.data.image);
      existing.data.image = `/uploads/${req.file.filename}`;
    }

    if (number) existing.data.number = number;
    if (title) existing.data.title = title;
    if (description) existing.data.description = description;

    const updated = await updateProcessById(id, existing.data);
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Delete Process Step
export const deleteProcess = async (req, res) => {
  try {
    const { id } = req.params;
    const step = await findProcessById(id);
    if (!step) {
      return res.status(404).json({ success: false, message: "Process not found." });
    }

    await deleteImage(step.data.image);
    await deleteProcessById(id);

    res.status(200).json({ success: true, message: "Process step deleted." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const deleteAllProcessSteps = async (req, res) => {
  try {
    await deleteAllProcess();
    res.status(200).json({ success: true, message: "All process steps deleted successfully." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//Testimonials Section
export const createTestimonial=async(req,res)=>{
  try{
    const { quote, name, company } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const error=testimonialValidation({quote,name,company});
    if(error){
      if(req.file)await deleteImage(`uploads/${req.file.filename}`);
      return res.status(400).json({ success: false, message: error });    
    }
    if (!image) return res.status(400).json({ success: false, message: "Image is required." });

    const newTestimonial={
      sectionName:"testimonials",
      data:{quote,name,company,image},
    };


    const saved=await saveTestimonial(newTestimonial);
    res.status(201).json({success:true,data:saved});  
  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await getAllTestimonials();
    res.status(200).json({ success: true, data: testimonials });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getTestimonial = async (req, res) => {
  try {
    const testimonial = await getTestimonialById(req.params.id);
    if (!testimonial) return res.status(404).json({ success: false, message: "Testimonial not found." });
    res.status(200).json({ success: true, data: testimonial });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
      return res.status(404).json({ success: false, message: "Testimonial not found" });
    }

    const { quote, name, company } = req.body;

    // 🔄 Update fields if provided
    if (quote) testimonial.data.quote = quote;
    if (name) testimonial.data.name = name;
    if (company) testimonial.data.company = company;

    // 📸 Handle image update
    if (req.file) {
      await deleteImage(testimonial.data.image);
      testimonial.data.image = `/uploads/${req.file.filename}`;
    }

    const updated = await testimonial.save();

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const removeAllTestimonials=async(req,res)=>{
  try{
    const all=await getAllTestimonials();
    for(let t of all)await deleteImage(t.data.image);
    await deleteAllTestimonials();
    res.status(200).json({success:true,message:"All testimonials deleted."});
  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
};

export const removeTestimonial=async(req,res)=>{
  try{
    const testimonial =await getTestimonialById(req.params.id);
    if(!testimonial) return res.status(404).json({success:false,message:"Testimonial not Found."})

      await deleteImage(testimonial.data.image);
      await deleteTestimonialById(req.params.id);

      res.status(200).json({success:true,message:"Testimonial Delete Successfully."})

  }catch(err){
    res.status(500).json({success:false,message:err.message});
  }
};


//FAQ section
// CREATE
export const createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const error = faqValidation({ question, answer });
    if (error)
      return res.status(400).json({ success: false, message: error });

    const saved = await saveFaq({ sectionName: "faq", data: { question, answer } });
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// READ ALL
export const getFaqs = async (req, res) => {
  try {
    const faqs = await getAllFaqs();
    res.status(200).json({ success: true, data: faqs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// READ SINGLE
export const getFaqById = async (req, res) => {
  try {
    const faq = await findFaqById(req.params.id);
    if (!faq) return res.status(404).json({ success: false, message: "FAQ not found" });
    res.status(200).json({ success: true, data: faq });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updateFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await findFaqById(id);

    if (!faq) {
      return res.status(404).json({ success: false, message: "FAQ not found." });
    }

    const { question, answer } = req.body;

    // Update only if values are provided
    if (question) faq.data.question = question;
    if (answer) faq.data.answer = answer;

    const updated = await updateFaqInDB(id, faq.data);

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE ONE
export const deleteFaq = async (req, res) => {
  try {
    await deleteFaqById(req.params.id);
    res.status(200).json({ success: true, message: "FAQ deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE ALL
export const deleteAllFaq = async (req, res) => {
  try {
    await deleteAllFaqs();
    res.status(200).json({ success: true, message: "All FAQs deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//bLOGS
export const createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const error = validateBlog({ title, category });
    if (error) {
      if (req.file) await deleteImage(`uploads/${req.file.filename}`);
      return res.status(400).json({ success: false, message: error });
    }
    if (!image) return res.status(400).json({ success: false, message: "Image is required." });

    const blog = {
      sectionName: "blogs",
      data: {
        title,
        category,
        image,
        content,
      },
    };

    const saved = await saveBlog(blog);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogsService();
    res.status(200).json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await getBlogByIdService(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    const { title, category, content } = req.body;

    if (title) blog.data.title = title;
    if (category) blog.data.category = category;
    if (content) blog.data.content = content;

    const file = req.file;
    if (file) {
      await deleteImage(blog.data.image);
      blog.data.image = `/uploads/${file.filename}`;
    }

    const updated = await blog.save();
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAllBlog=async(req,res)=>{
  try{
    const all=await getAllBlogsService()
    for (const b of all) deleteImage(b.data.image)
      await deleteAllBlogs();
    res.status(200).json({success:true,message:"successfully deleted all Blogs"})
  }catch(err){
    res.status(500).json({success:false,message:err.message})
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await getBlogByIdService(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    await deleteImage(blog.data.image);
    await deleteBlogByIdService(req.params.id);
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

