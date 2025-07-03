//footerValidation
export const validateFooter = ({ logoText, description }) => {
    if (!logoText?.trim()) return "Logo text is required";
    if (!description?.trim()) return "Description is required";
    return null;
  };