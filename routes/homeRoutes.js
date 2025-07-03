import express from "express";
import upload from "../middleware/upload.js";
import {
  getHeroSection,
  createHeroSectionWithImage,
  deleteHeroSection,
  deleteHeroSectionById,
} from "../controllers/homeController.js";
import {
  getAboutSection,
  createAboutSection,
  updateAboutSection,
  deleteAboutSection,
  deleteAboutSectionById,
} from "../controllers/homeController.js";
//service section import
import {
  createService,
  getAllServices,
  getService,
  updateService,
  deleteService,
} from "../controllers/homeController.js";

//Process
import {
  createProcess,
  getprocess,
  getprocessById,
  updateProcess,
  deleteProcess,
  deleteAllProcessSteps,
} from "../controllers/homeController.js";
import {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  removeTestimonial,
  removeAllTestimonials,
} from "../controllers/homeController.js";

//FAQ
import {
  createFaq,
  getFaqs,
  getFaqById,
  updateFaqById,
  deleteFaq,
  deleteAllFaq,
} from "../controllers/homeController.js";

//Blogs
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteAllBlog,
  deleteBlog,
} from "../controllers/homeController.js";



const router = express.Router();

router.get("/hero", getHeroSection);
router.post("/hero", upload.single("image"), createHeroSectionWithImage); // 👈 Now supports image + text
router.delete("/hero", deleteHeroSection);
router.delete("/hero/:id", deleteHeroSectionById);

// About Us Section
router.get("/about", getAboutSection);
router.post(
  "/about",
  upload.fields([
    { name: "cards[0][image]" },
    { name: "cards[1][image]" },
    { name: "cards[2][image]" },
  ]),
  createAboutSection
);
router.patch(
  "/about/:id",
  upload.fields([
    { name: "cards[0][image]" },
    { name: "cards[1][image]" },
    { name: "cards[2][image]" },
  ]),
  updateAboutSection
);
router.delete("/about", deleteAboutSection);
router.delete("/about/:id", deleteAboutSectionById);

//Service Section
router.post("/service", upload.single("image"), createService);
router.get("/service", getAllServices);
router.get("/service/:id", getService);
router.put("/service/:id", upload.single("image"), updateService);
router.delete("/service/:id", deleteService);

//process
router.post("/process", upload.single("image"), createProcess);
router.get("/process", getprocess);
router.get("/process/:id", getprocessById);
router.patch("/process/:id", upload.single("image"), updateProcess);
router.delete("/process", deleteAllProcessSteps);
router.delete("/process/:id", deleteProcess);

//Testimonials
router.post("/testimonial", upload.single("image"), createTestimonial);
router.get("/testimonial",getTestimonials);
router.get("/testimonial/:id",getTestimonial)
router.put("/testimonial/:id", upload.single("image"), updateTestimonial);
router.delete("/testimonial", removeAllTestimonials);
router.delete("/testimonial/:id", removeTestimonial);

//FAQ
router.post("/faq", createFaq);
router.get("/faq", getFaqs);
router.get("/faq/:id", getFaqById);
router.put("/faq/:id", updateFaqById);
router.delete("/faq/:id", deleteFaq);
router.delete("/faq", deleteAllFaq); 

//Blogs
router.post("/blog", upload.single("image"), createBlog);
router.get("/blog", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.patch("/blog/:id", upload.single("image"), updateBlog);
router.delete("/blog/", deleteAllBlog);
router.delete("/blog/:id", deleteBlog);

export default router;
