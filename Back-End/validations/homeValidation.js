export const validateHeroInput = ({
  badge,
  heading,
  subheading,
  description,
  buttonText,
  buttonLink
}) => {
  const isNonEmpty = (value) => typeof value === 'string' && value.trim().length > 0;

  const isValidURL = (url) => {
    // try {
    //   new URL(url);
    //   return true;
    // } catch (err) {
    //   return false;
    // }
    return typeof url === "string" && url.startsWith("/");

  };

  return (
    isNonEmpty(badge) &&
    isNonEmpty(heading) &&
    isNonEmpty(subheading) &&
    isNonEmpty(description) &&
    isNonEmpty(buttonText) &&
    isNonEmpty(buttonLink) &&
    isValidURL(buttonLink)
  );
};
export const validateAboutMainFields = ({ title, description, buttonText }) => {
  if (!title || !description || !buttonText) {
    return "All main fields (title, description, buttonText) are required.";
  }
  return null;
};

export const validateAboutCards = (cards, files) => {
  if (!Array.isArray(cards) || cards.length !== 3) {
    return "Exactly 3 cards are required.";
  }

  for (let i = 0; i < cards.length; i++) {
    const { icon, title, description } = cards[i];
    const imageFile = files[`cards[${i}][image]`];

    if (!icon || !title || !description || !imageFile) {
      return `All fields for card ${i + 1} (icon, title, description, image) are required.`;
    }
  }

  return null;
};


export const validateAboutUpdate = ({ title, description, buttonText }) => {
  if (title && title.trim() === "") return "Title cannot be empty.";
  if (description && description.trim() === "") return "Description cannot be empty.";
  if (buttonText && buttonText.trim() === "") return "Button text cannot be empty.";
  return null;
};

//Services
export const validateServicesValidation = ({number ,title ,description})=>{
  if(!number || number.trim() ==="") return "number is required."
  if(!title || title.trim() ==="")return "Title is Reuired.";
  if(!description || description.trim() === "")return "Description is required."
  return null;
};

//Process
export const ProcessValidation=({ number, title, description })=>{
  if (!number || number.trim() === "") return "Number is required";
  if (!title || title.trim() === "") return "Title is required";
  if (!description || description.trim() === "") return "Description is required";
  return null;
};
//Testimonial
export const testimonialValidation=({ quote, name, company }) => {
  if (!quote?.trim()) return "Quote is required";
  if (!name?.trim()) return "Name is required";
  if (!company?.trim()) return "Company is required";
  return null;
};

//faqValidation
export const faqValidation = ({ question, answer }) => {
  if (!question?.trim()) return "Question is required.";
  if (!answer?.trim()) return "Answer is required.";
  return null;
};

//validateBlog
export const validateBlog = ({ title, category }) => {
  if (!title?.trim()) return "Title is required";
  if (!category?.trim()) return "Category is required";
  return null;
};

