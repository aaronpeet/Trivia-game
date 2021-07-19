export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=2&difficulty=easy&type=boolean',
  timeout: 4000
})