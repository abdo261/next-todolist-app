import Joi from "joi";

interface TODO {
    text?:string;isDone?:boolean
}

export const validateCreateTodo = (todo:TODO) => {
    const schema = Joi.object({
      text: Joi.string()
        .trim()
        .min(3)
        .required()
        .pattern(/^[a-zA-Z0-9 '"]*$/)
        .messages({
          'string.base': 'Text must be a string.',
          'string.empty': 'Text cannot be empty.',
          'string.min': 'Text must be at least 3 characters long.',
          'any.required': 'Text is required.',
          'string.pattern.base': 'Text can only contain letters, numbers, spaces, single quotes, and double quotes.'
        }),
      isDone: Joi.boolean()
        .default(false)
        .messages({
          'boolean.base': 'isDone must be a boolean value.'
        })
    });
  
    return schema.validate(todo);
  };

  export const validateUpdateTodo = (todo: TODO) => {
    const schema = Joi.object({
      text: Joi.string()
        .trim()
        .min(3)
        .pattern(/^[a-zA-Z0-9 '"]*$/)
        .messages({
          'string.base': 'Text must be a string.',
          'string.empty': 'Text cannot be empty.',
          'string.min': 'Text must be at least 3 characters long.',
          'string.pattern.base': 'Text can only contain letters, numbers, spaces, single quotes, and double quotes.'
        }),
      isDone: Joi.boolean()
        .messages({
          'boolean.base': 'isDone must be a boolean value.'
        })
    });
  
    return schema.validate(todo, { allowUnknown: true, abortEarly: false });
  };