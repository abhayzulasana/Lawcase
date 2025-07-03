import {
    saveNavbar,
    getNavbarService,
    getAllNavbarService,
    updateNavbarService,
    deleteNavbarService,
    deleteAllNavbarService,
    getNavbarByIdService,
  } from "../services/navbarService.js";

import { validateNavbar } from "../validations/navbarValidation.js";
import Navbar from "../models/navbarModel.js";


export const createNavbar = async (req, res) => {
    try {
      const { buttonText, buttonUrl } = req.body;
      const logoImage = req.file?.path;
  
      // Parse links
      let links;
      try {
        links = JSON.parse(req.body.links);
      } catch (e) {
        return res.status(400).json({ success: false, message: "Invalid JSON format for links" });
      }
  
      const error = validateNavbar({ logoImage, links });
      if (error) return res.status(400).json({ success: false, message: error });
  
      const data = {
        sectionName: "navbar",
        data: {
          logoImage,
          links,
          buttonText,
          buttonUrl,
        },
      };
  
      const saved = await saveNavbar(data);
      res.status(201).json({ success: true, data: saved });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
export const getNavbar = async (req, res) => {
  try {
    const navbar = await getNavbarService();
    res.status(200).json({ success: true, data: navbar });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const getAllNavbar = async (req, res) => {
    try {
      const all = await getAllNavbarService();
      res.status(200).json({ success: true, data: all });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
export const getNavbarById = async (req, res) => {
  try {
    const navbar = await getNavbarByIdService(req.params.id);
    if (!navbar)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: navbar });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findById(req.params.id);
    if (!navbar)
      return res.status(404).json({ success: false, message: "Not found" });

    const { links, buttonText, buttonUrl } = req.body;
    const logoImage = req.file?.path;

    if (logoImage) navbar.data.logoImage = logoImage;
    if (links) navbar.data.links = links;
    if (buttonText) navbar.data.buttonText = buttonText;
    if (buttonUrl) navbar.data.buttonUrl = buttonUrl;

    const updated = await navbar.save();
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAllNavbar = async (req, res) => {
    try {
      await deleteAllNavbarService();
      res.status(200).json({ success: true, message: "All navbar data deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
export const deleteNavbar = async (req, res) => {
  try {
    const deleted = await deleteNavbarService(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Navbar deleted", data: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
