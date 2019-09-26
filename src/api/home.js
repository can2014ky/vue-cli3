import instance from './axios'

export const getNewsLetters = params => instance.get('/a.json', params)
