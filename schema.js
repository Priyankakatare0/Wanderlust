const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().messages({
            "string.empty": "Title is required.",
        }),
        description: Joi.string().required().messages({
            "string.empty": "Description is required.",
        }),
        location: Joi.string().required().messages({
            "string.empty": "Location is required.",
        }),
        price: Joi.number().required().min(0).strict().messages({
            "number.base": "Price must be a number.",
            "number.min": "Price must be greater than or equal to 0.",
        }),
        image: Joi.string().allow("", null).messages({
            "string.base": "Image must be a valid string.",
        }),
    }).required().messages({
        "object.base": "Listing must be a valid object.",
        "object.unknown": "Unknown properties are not allowed.",
    }),
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});