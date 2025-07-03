import Navbar from "../models/navbarModel.js";

export const saveNavbar = async (data) => await new Navbar(data).save();
export const getNavbarService = async () => await Navbar.findOne({ sectionName: "navbar" });
export const getAllNavbarService = async () => await Navbar.find({ sectionName: "navbar" });

export const updateNavbarService = async (id, data) => await Navbar.findByIdAndUpdate(id, data, { new: true });
export const deleteNavbarService = async (id) => await Navbar.findByIdAndDelete(id);
export const deleteAllNavbarService = async () => await Navbar.deleteMany({ sectionName: "navbar" });

export const getNavbarByIdService = async (id) => await Navbar.findById(id);
