import joi from "joi";

export default joi.object().keys({
  street: joi.string().max(100).required(),
  city: joi.string().max(100).required(),
  state: joi.string().max(100).required(),
  country: joi.string().max(100).required(),
  postalCode: joi.string().max(100).optional(),
});
