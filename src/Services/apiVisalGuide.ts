import axios from "axios"

/**
 * Função apiVisualGuide
 * 
 * Esta função cria e retorna uma instância do Axios configurada para fazer chamadas para a URL base 
 * do Star Wars Visual Guide, que geralmente contém imagens relacionadas ao universo Star Wars.
 * 
 * @returns {AxiosInstance} - Retorna uma instância do Axios configurada com a base URL do Star Wars Visual Guide.
 */
export function apiVisualGuide() {

  const apiStarWarsVG = axios.create({
    baseURL: 'https://starwars-visualguide.com/assets/img/'
  })

  return apiStarWarsVG
}