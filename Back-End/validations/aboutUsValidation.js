export const validateAboutUs = ({ title, description }) => {
  if (!title?.trim()) return "Title is required";
  if (!description?.trim()) return "Description is required";
  return null;
};

export const validateWhyChooseUsInput = (data) => {
  if (!data.title || !data.buttonText) return "Title and Button Text are required.";
  return null;
  };