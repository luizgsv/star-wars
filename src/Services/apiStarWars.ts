import axios from "axios"

export function apiSWApi() {

  const api = axios.create({
    baseURL: 'https://swapi.dev/api/'
  })

  return api
}