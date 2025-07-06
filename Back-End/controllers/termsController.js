import Terms from "../models/Term&Condition/TermsModel.js";
import { termsValidation } from "../validations/termsValidation.js";

export const createTerms = async (req, res) => {
  try {
    const { error } = termsValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const newTerms = new Terms(req.body);
    await newTerms.save();
    res.status(201).json(newTerms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllTerms = async (req, res) => {
  try {
    const terms = await Terms.find();
    res.json(terms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getTermsById = async (req, res) => {
  try {
    const terms = await Terms.findById(req.params.id);
    if (!terms) return res.status(404).json({ error: "Not found" });
    res.json(terms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateTerms = async (req, res) => {
  try {
    const { error } = termsValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const updated = await Terms.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateSectionByTitle = async (req, res) => {
  const { id } = req.params;
  const { matchTitle, newTitle, newDescription } = req.body;

  if (!matchTitle) {
    return res.status(400).json({ error: "matchTitle is required" });
  }

  const cleanMatchTitle = matchTitle.trim();

  try {
    const term = await Terms.findById(id);
    if (!term) {
      return res.status(404).json({ message: "Document not found" });
    }

    const found = term.contentSections.find(
      (section) => section.title.trim() === cleanMatchTitle
    );

    if (!found) {
      return res.status(404).json({
        message: `No section with title "${cleanMatchTitle}" found in the document`
      });
    }

    const updateObj = {};
    if (newTitle) updateObj["contentSections.$[elem].title"] = newTitle;
    if (newDescription) updateObj["contentSections.$[elem].description"] = newDescription;

    const result = await Terms.updateOne(
      { _id: id },
      { $set: updateObj },
      {
        arrayFilters: [{ "elem.title": cleanMatchTitle }]
      }
    );

    return res.json({
      message: `Section with title "${cleanMatchTitle}" updated successfully`
    });

  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const deletesTerms = async (req, res) => {
  try {
    const deleted = await Terms.deleteMany();
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully All Term & condition" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


export const deleteTerms = async (req, res) => {
  try {
    const deleted = await Terms.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully Term & condition By Id" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
