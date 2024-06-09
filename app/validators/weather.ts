import vine from '@vinejs/vine'

export const WeatherInputValidator = vine.compile(vine.string().maxLength(10))
