import fs from "fs";
import path from "path";

export const deleteImage = async (imagePath) => {
  try {
    if (!imagePath) {
      console.warn("⚠️ No image path provided.")      
      return;
    }

    const filename = path.basename(imagePath);
    const fullPath = path.resolve("uploads", filename);

    if (fs.existsSync(fullPath)) {
      await fs.promises.unlink(fullPath);
      console.log("🗑️ Deleted:", fullPath);
    }else{
      console.warn("🚫 File not found:",fullPath)
    }
  } catch (err) {
    console.error("❌ Failed to delete image:", err.message);
  }
};
