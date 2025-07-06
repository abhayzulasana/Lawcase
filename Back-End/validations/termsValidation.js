import Joi from "joi";

export const termsValidation = Joi.object({
  contentSections: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required()
    })
  ).required(),
  status: Joi.number().valid(0, 1)
});
