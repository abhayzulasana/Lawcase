import { deleteImage } from "../utils/Utils.js";
import {
  validateAboutUs,
  validateWhyChooseUsInput,
} from "../validations/aboutUsValidation.js";

import AboutUs from "../models/About_Us/aboutUsModel.js";
import {
  saveAboutUs,
  getAboutUsService,
  deleteAllAboutUsService,
  deleteAboutUsService,
  getAboutUsByIdService,
} from "../services/aboutUsService.js";

import {
  saveWhyChooseUs,
  getWhyChooseUsService,
  getWhyChooseUsByIdService,
  updateWhyChooseUsService,
  deleteWhyChooseUsByIdService,
  deleteAllWhyChooseUsService,

} from "../services/aboutUsService.js";

//OurTeam
import OurTeam from "../models/About_Us/ourTeamModel.js";

export const createAboutUs = async (req, res) => {
  try {
    const { title, description, buttonText, mission, vision } = req.body;
    const images =
      req.files?.images?.map((file) => `/uploads/${file.filename}`) || [];
    const missionImage = req.files?.["mission[image]"]?.[0]?.filename;
    const visionImage = req.files?.["vision[image]"]?.[0]?.filename;

    const error = validateAboutUs({ title, description });
    if (error) return res.status(400).json({ success: false, message: error });

    // const aboutData = {
    //   sectionName: "about_us",
    //   data: {
    //     title,
    //     description,
    //     buttonText,
    //     images,
    //     mission,
    //     vision,
    //   },
    // };

    const aboutData = {
      sectionName: "about_us",
      data: {
        title,
        description,
        buttonText,
        images,
        mission: {
          ...mission,
          image: missionImage ? `/uploads/${missionImage}` : null,
        },
        vision: {
          ...vision,
          image: visionImage ? `/uploads/${visionImage}` : null,
        },
      },
    };
    const saved = await saveAboutUs(aboutData);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAboutUs = async (req, res) => {
  try {
    const about = await getAboutUsService();
    res.status(200).json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAboutUsById = async (req, res) => {
  try {
    const about = await getAboutUsByIdService(req.params.id);
    if (!about)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateAboutUs = async (req, res) => {
  try {
    const about = await AboutUs.findById(req.params.id);
    if (!about)
      return res.status(404).json({ success: false, message: "Not found" });

    const { title, description, buttonText, mission, vision } = req.body;

    if (title) about.data.title = title;
    if (description) about.data.description = description;
    if (buttonText) about.data.buttonText = buttonText;
    if (mission) about.data.mission = mission;
    if (vision) about.data.vision = vision;

    if (req.files?.length) {
      about.data.images.forEach(async (img) => await deleteImage(img));
      about.data.images = req.files.map((f) => `/uploads/${f.filename}`);
    }

    const updated = await about.save();
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAboutUs = async (req, res) => {
  try {
    const about = await AboutUs.findById(req.params.id);
    if (!about)
      return res.status(404).json({ success: false, message: "Not found" });

    about.data.images.forEach(async (img) => await deleteImage(img));
    await deleteAboutUsService(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "About Us section deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAllAboutUs = async (req, res) => {
  try {
    const result = await deleteAllAboutUsService();
    res.status(200).json({
      success: true,
      message: `Deleted ${result.deletedCount} About Us entries.`,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//WhyChooseUs
export const createWhyChooseUs = async (req, res) => {
  try {
    const { subtitle, title, buttonText } = req.body;
    const features = req.body.features ? JSON.parse(req.body.features) : [];

    // Add uploaded icon to each feature
    const icons = req.files || [];
    features.forEach((feature, idx) => {
      if (icons[idx]) feature.icon = `/uploads/${icons[idx].filename}`;
    });

    const error = validateWhyChooseUsInput({ title, buttonText });
    if (error) return res.status(400).json({ success: false, message: error });

    const data = {
      sectionName: "Why_Choose_Us",
      data: {
        subtitle,
        title,
        buttonText,
        features,
      },
    };

    const saved = await saveWhyChooseUs(data);
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getWhyChooseUs = async (req, res) => {
  try {
    const result = await getWhyChooseUsService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getWhyChooseUsById = async (req, res) => {
  try {
    const result = await getWhyChooseUsByIdService(req.params.id);
    if (!result)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateWhyChooseUs = async (req, res) => {
  try {
    const { subtitle, title, buttonText } = req.body;
    const features = req.body.features ? JSON.parse(req.body.features) : [];
    const icons = req.files || [];

    features.forEach((feature, idx) => {
      if (icons[idx]) feature.icon = `/uploads/${icons[idx].filename}`;
    });

    const error = validateWhyChooseUsInput({ title, buttonText });
    if (error) return res.status(400).json({ success: false, message: error });

    const updateData = {
      sectionName: "Why_Choose_Us",
      data: {
        subtitle,
        title,
        buttonText,
        features,
      },
    };

    const updated = await updateWhyChooseUsService(req.params.id, updateData);

    if (!updated)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteWhyChooseUsById = async (req, res) => {
  try {
    const deleted = await deleteWhyChooseUsByIdService(req.params.id);
    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAllWhyChooseUs = async (req, res) => {
  try {
    const result = await deleteAllWhyChooseUsService();
    res.status(200).json({
      success: true,
      message: `Deleted ${result.deletedCount} entries.`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ CREATE
export const createTeamMember = async (req, res) => {
  try {
    const { name, designation, socialLinks } = req.body;
    const image = req.file?.filename ? `/uploads/${req.file.filename}` : null;

    if (!name || !designation)
      return res.status(400).json({ success: false, message: "Name and Designation are required." });

    const newMember = await OurTeam.create({
      image,
      name,
      designation,
      socialLinks: JSON.parse(socialLinks || "{}"),
    });

    res.status(201).json({ success: true, data: newMember });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ GET (All) with Pagination & Search
export const getAllTeamMembers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const query = {
      name: { $regex: search, $options: "i" },
    };

    const team = await OurTeam.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await OurTeam.countDocuments(query);

    res.status(200).json({
      success: true,
      data: team,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ GET by ID
export const getTeamMemberById = async (req, res) => {
  try {
    const member = await OurTeam.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ UPDATE
export const updateTeamMember = async (req, res) => {
  try {
    const { name, designation, socialLinks } = req.body;
    const member = await OurTeam.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Not found" });

    if (req.file?.filename) {
      if (member.image) await deleteImage(member.image);
      member.image = `/uploads/${req.file.filename}`;
    }

    if (name) member.name = name;
    if (designation) member.designation = designation;
    if (socialLinks) member.socialLinks = JSON.parse(socialLinks);

    const updated = await member.save();
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ DELETE
export const deleteTeamMember = async (req, res) => {
  try {
    const member = await OurTeam.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Not found" });

    if (member.image) await deleteImage(member.image);
    await OurTeam.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
