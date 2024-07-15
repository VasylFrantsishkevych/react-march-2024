import Joi from "joi";

const postFormValidator = 
   Joi.object({
      title: Joi.string()
         .required()
         .pattern(/^[a-zA-ZА-яіІїЇ]{1,50}$/)
         .messages({
            "string.pattern.base": "Назва поста має містити від 1 до 50 символів",
         }),

      body: Joi.string()
         .required()
         .pattern(/^[a-zA-ZА-яіІїЇ]{1,500}$/)
         .messages({
            "string.pattern.base": "Назва поста має містити від 1 до 500 символів",
         }),
      
      userId: Joi.number()
         .required()
         .min(1)
         .max(10)
         .messages({
            "number.min": "min id is 1",
            "number.max": "max id is 10",
        }),   
   })


export {
   postFormValidator
}