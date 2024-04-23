const Joi = require('joi')

const eventSchema = Joi.object({
    title: Joi.string().min(2).max(100).required().messages({
        'string.empty': 'Tienes que escribir el nombre del evento.',
        'string.min': 'El nombre del evento debe tener mínimo 2 caracteres.',
        'string.max': 'El nombre del evento no puede tener más de 100 caracteres.',
        'any.required': 'El nombre del evento es obligatorio.'
    }),
    event_date: Joi.date().required().messages({
        'any.required': 'La fecha de inicio del evento es obligatoria.',
        'string.empty': 'La fecha de inicio del evento no puede estar vacía.',
        'date.format': 'La fecha de inicio del evento debe ser una fecha (AAAA-MM-DD)'
      }),
    content: Joi.string().min(2).max(10000).required().messages({
        'string.empty': 'La descripción es obligatoria',
        'string.min': 'La descripción del evento tiene que tener mínimo 2 caracteres.',
        'string.max': 'La descripción no puede tener más de 10000 caracteres.',
        'any.required': 'La descripción del evento es obligatoria.'
    }),
    video1: Joi.string().max(1000).pattern(new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+$')).messages({
        'string.max': 'El enlace debe tener un máximo de 1000 caracteres.',
        'string.pattern.base': 'El enlace del primer video debe ser un enlace válido de YouTube.'
    }),
    video2: Joi.string().max(1000).pattern(new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+$')).messages({
        'string.max': 'El enlace debe tener un máximo de 1000 caracteres.',
        'string.pattern.base': 'El enlace del segundo video debe ser un enlace válido de YouTube.'
    }),
    video3: Joi.string().max(1000).pattern(new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+$')).messages({
        'string.max': 'El enlace debe tener un máximo de 1000 caracteres.',
        'string.pattern.base': 'El enlace del tercer video debe ser un enlace válido de YouTube.'
    }),
});

module.exports = eventSchema;