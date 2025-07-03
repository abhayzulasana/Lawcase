import Footer from "../models/footerModel.js";

export const saveFooter = async (data) => await new Footer(data).save();
export const getFooterService = async () =>
  await Footer.findOne({ sectionName: "footer" });
export const updateFooterService = async (id, data) =>
  await Footer.findByIdAndUpdate(id, data, { new: true });
export const deleteFooterService = async (id) =>
  await Footer.findByIdAndDelete(id);
