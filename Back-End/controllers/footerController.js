import {
    saveFooter,
    getFooterService,
    updateFooterService,
    deleteFooterService,
  } from "../services/footerService.js";
  import { validateFooter } from "../validations/footerValidation.js";
  import Footer from "../models/footerModel.js";

  export const createFooter = async (req, res) => {
    try {
      const { logoText, description, menuLinks, otherLinks, socialLinks, ctaText, ctaButton } =
        req.body;
  
      const error = validateFooter({ logoText, description });
      if (error) return res.status(400).json({ success: false, message: error });
  
      const footerData = {
        sectionName: "footer",
        data: {
          logoText,
          description,
          menuLinks,
          otherLinks,
          socialLinks,
          ctaText,
          ctaButton,
        },
      };
  
      const saved = await saveFooter(footerData);
      res.status(201).json({ success: true, data: saved });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  export const getFooter = async (req, res) => {
    try {
      const footer = await getFooterService();
      res.status(200).json({ success: true, data: footer });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  export const getFooterById = async (req, res) => {
    try {
      const { id } = req.params;
      const footer = await Footer.findById(id);
      if (!footer) {
        return res.status(404).json({ success: false, message: "Footer not found" });
      }
      res.status(200).json({ success: true, data: footer });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  
export const updateFooter = async (req, res) => {
    try {
      const { id } = req.params;
      const footer = await Footer.findById(id);
  
      if (!footer) return res.status(404).json({ success: false, message: "Footer not found" });
  
      const { logoText, description, menuLinks, otherLinks, socialLinks, ctaText, ctaButton } = req.body;
  
          if (logoText) footer.data.logoText = logoText;
    if (description) footer.data.description = description;
    if (menuLinks) footer.data.menuLinks = menuLinks;
    if (otherLinks) footer.data.otherLinks = otherLinks;
    if (socialLinks) footer.data.socialLinks = socialLinks;
    if (ctaText) footer.data.ctaText = ctaText;
    if (ctaButton) footer.data.ctaButton = ctaButton;

  
      const updated = await footer.save();
  
      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  export const deleteAllFooters = async (req, res) => {
    try {
      await Footer.deleteMany({ sectionName: "footer" });
      res.status(200).json({ success: true, message: "All footer data deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  export const deleteFooter = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteFooterService(id);
      res.status(200).json({ success: true, message: "Footer deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  