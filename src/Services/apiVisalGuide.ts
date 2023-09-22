import axios from "axios"

export function apiVisualGuide() {

  const apiStarWarsVG = axios.create({
    baseURL: 'https://starwars-visualguide.com/assets/img/'
  })

  return apiStarWarsVG
}