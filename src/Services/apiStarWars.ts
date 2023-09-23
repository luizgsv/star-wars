import axios from "axios"

/**
 * Função apiSWApi
 * 
 * Esta função cria e retorna uma instância do Axios configurada para fazer chamadas à API do Star Wars (SWAPI).
 * 
 * @returns {AxiosInstance} - Retorna uma instância do Axios configurada com a base URL da SWAPI.
 */
export function apiSWApi() {

  const api = axios.create({
    baseURL: 'https://swapi.dev/api/'
  })

  return api
}