import { deleteImage } from "../utils/Utils.js";
import AboutUs from "../models/About_Us/aboutUsModel.js";
import WhyChooseUs from "../models/About_Us/whyChooseUsModel.js";
import OurTeam from "../models/About_Us/ourTeamModel.js";

export const saveAboutUs = async (data) => await new AboutUs(data).save();
export const getAboutUsService = async () =>
  await AboutUs.find({ sectionName: "about_us" });
export const updateAboutUsService = async (id, data) =>
  await AboutUs.findByIdAndUpdate(id, data, { new: true });
export const deleteAboutUsService = async (id) =>
  await AboutUs.findByIdAndDelete(id);
export const getAboutUsByIdService = async (id) => await AboutUs.findById(id);
export const deleteAllAboutUsService = async () => {
  const all = await AboutUs.find({ sectionName: "about_us" });
  all.forEach(async (doc) => {
    doc.data.images.forEach(async (img) => await deleteImage(img));
    if (doc.data.mission?.image) await deleteImage(doc.data.mission.image);
    if (doc.data.vision?.image) await deleteImage(doc.data.vision.image);
  });

  return await AboutUs.deleteMany({ sectionName: "about_us" });
};

//WhyChooseUs
// export const saveWhyChooseUs = async (data) => await new WhyChooseUs(data).save();
// export const getWhyChooseUsService = async () => await WhyChooseUs.findOne({ sectionName: "why_choose_us" });
// export const getWhyChooseUsByIdService = async (id) => await WhyChooseUs.findById(id);
// export const updateWhyChooseUsService = async (id, data) => await WhyChooseUs.findByIdAndUpdate(id, data, { new: true });
// export const deleteWhyChooseUsService = async (id) => await WhyChooseUs.findByIdAndDelete(id);
// export const deleteAllWhyChooseUsService = async () => await WhyChooseUs.deleteMany({ sectionName: "why_choose_us" });
export const saveWhyChooseUs = async (data) => await new WhyChooseUs(data).save();

export const getWhyChooseUsService = async () =>
  await WhyChooseUs.find({ sectionName: "Why_Choose_Us" }).sort({ createdAt: -1 });

export const getWhyChooseUsByIdService = async (id) =>
  await WhyChooseUs.findById(id);

export const updateWhyChooseUsService = async (id, data) =>
  await WhyChooseUs.findByIdAndUpdate(id, data, { new: true });

export const deleteWhyChooseUsByIdService = async (id) =>
  await WhyChooseUs.findByIdAndDelete(id);

export const deleteAllWhyChooseUsService = async () =>
  await WhyChooseUs.deleteMany({ sectionName: "Why_Choose_Us" });


export const saveTeamMember = async (data) => await OurTeam.create(data);
export const getTeamService = async () => await OurTeam.find();
export const deleteTeamService = async (id) => await OurTeam.findByIdAndDelete(id);