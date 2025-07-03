// export const validateNavbar = ({ logoImage, links }) => {
//     if (!logoImage?.trim()) return "Logo image is required";
//     if (!Array.isArray(links) || links.length === 0) return "Links must be provided";
//     return null;
//   };
export const validateNavbar = ({ logoImage, links }) => {
    if (!logoImage) return "Logo image is required";
    if (!Array.isArray(links) || links.length === 0) return "Links must be provided";
    return null;
  };
  