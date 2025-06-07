import { object, string, ref, date } from 'joi';

const userSchema = object({
  fullName: string().min(3).max(100).required().messages({
    'string.empty': 'Full Name is required',
    'string.min': 'Full Name must be at least 3 characters long'
  }),

  email: string().email().required().messages({
    'string.email': 'Please enter a valid email',
    'string.empty': 'Email is required'
  }),

  phone: string()
    .pattern(/^[0-9+\-()\s]+$/)
    .min(7)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'Phone number format is invalid',
      'string.empty': 'Phone number is required'
    }),

  password: string().min(8).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long'
  }),

  confirmPassword: string()
    .valid(ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match',
      'string.empty': 'Confirm Password is required'
    }),

  dateOfBirth: date().less('now').required().messages({
    'date.base': 'Date of Birth must be a valid date',
    'date.less': 'Date of Birth must be in the past',
    'any.required': 'Date of Birth is required'
  }),

  country: string().min(2).required().messages({
    'string.empty': 'Country is required'
  })
});

export default userSchema;