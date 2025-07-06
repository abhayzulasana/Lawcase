import ContactInfo from "../models/Contact_Us/contactInfoModel.js";
import ContactCard from "../models/Contact_Us/contactCardModel.js";
import { deleteImage } from "../utils/Utils.js";

//contactInfo
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const contact = await ContactInfo.create({ name, email, message });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const getAllContacts=async(req,res)=>{
    try{
        const contacts=await ContactInfo.find({sectionName:"contactInfo"});
        res.status(200).json({success:true,data:contacts});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}

export const getContactById=async(req,res)=>{
    try{
        const {id}=req.params;
        const contact=await ContactInfo.findById(id);
        if(!contact){
            return res.status(404).json({success:false,message:"Contact not found"});
        }
        res.status(200).json({success:true,data:contact})
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}
export const updateContact = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, message } = req.body;
  
      if (!name && !email && !message) {
        return res
          .status(400)
          .json({ success: false, message: "At least one field is required to update" });
      }
  
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email format" });
        }
      }
  
      const updateFields = {};
      if (name) updateFields.name = name;
      if (email) updateFields.email = email;
      if (message) updateFields.message = message;
  
      const updatedContact = await ContactInfo.findByIdAndUpdate(id, updateFields, {
        new: true,
      });
  
      if (!updatedContact) {
        return res
          .status(404)
          .json({ success: false, message: "Contact not found" });
      }
  
      res.status(200).json({ success: true, data: updatedContact });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
export const deleteContact=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted = await ContactInfo.findByIdAndDelete(id)
        if(!deleted){
            return res.status(400).json({success:false,message:"Contact not found"});
        }
        res.status(200).json({success:true,message:"Contact Deleted Successfully"});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}
export const deleteAllContacts=async(req,res)=>{
    try{
        const contactdelete=await ContactInfo.deleteMany();
        if(!contactdelete){
            return res.status(400).json({success:false,message:"No messages found to delete"});
        }
        res.status(200).json({success:true,message:"All Messages Deleted Successfully"});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}

// Contact Card
export const createContactCard = async (req, res) => {
  try {
    const { type, label, value } = req.body;
    const files = req.files;

    if (!type || !label || !value || !files?.icon?.[0] || !files?.bgImage?.[0]) {
      return res.status(400).json({ success: false, message: "All fields & files required" });
    }

    const iconPath = `/uploads/${files.icon[0].filename}`;
    const bgPath = `/uploads/${files.bgImage[0].filename}`;

    const card = await ContactCard.create({
      type,
      label,
      value,
      icon: iconPath,
      bgImage: bgPath,
    });

    res.status(201).json({ success: true, data: card });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};  
  export const getAllContactCards = async (req, res) => {
    try {
      const cards = await ContactCard.find({sectionName:"contactCard"});
      if (!cards || cards.length === 0) {
        return res.status(404).json({ success: false, message: "No contact cards found" });
      }
      res.status(200).json({ success: true, data: cards });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
 
  export const deleteContactCard = async (req, res) => {
    try {
      const card = await ContactCard.findByIdAndDelete(req.params.id);
      if (!card) return res.status(404).json({ success: false, message: "Card not found" });
  
      if (card.icon) await deleteImage(card.icon);
      if (card.bgImage) await deleteImage(card.bgImage);
  
      res.status(200).json({ success: true, message: "Card deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  
  export const deleteAllContactCards = async (req, res) => {
    try {
      const all = await ContactCard.find();
      for (const item of all) {
        if (item.icon) await deleteImage(item.icon);
        if (item.bgImage) await deleteImage(item.bgImage);
      }
      await ContactCard.deleteMany();
      res.status(200).json({ success: true, message: "All cards deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };