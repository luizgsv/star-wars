/* eslint-disable no-debugger */
import { apiStarWars } from "@src/Hook/api"
import { IPerson } from "@src/Models/Interfaces/person"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "./styles"
import { Film, PersonFormatted } from "@src/Models/Interfaces/personFormatted"

export function Person() {

  const { id } = useParams()

  /**
   * Hook useState para definir o estado de uma imagem.
   * 
   * Este hook inicializa o estado de uma variável chamada 'image' com uma URL de imagem com base no 'id'.
   * 
   * @param {string} id - O identificador único associado à imagem.
   * @returns {string} - O estado atual da imagem.
   */
  const [image] = useState(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)

  const getPersonById = async (id?: string) => {

    if (!id) throw new Error("Id indefinido");     
    
    try {
      const { data } = await apiStarWars.get<IPerson>(`https://swapi.dev/api/people/${id}`)
      return data
    } catch (error) {
      throw new Error("Erro ao buscar dados de um personagem"); 
    }
  }

  const getFilmsById = async (id: number) => {     
    try {
      const { data } = await apiStarWars.get<Film>(`https://swapi.dev/api/films/${id}`)
      return data
    } catch (error) {
      throw new Error("Erro ao buscar dados de um personagem"); 
    }
  }

  /**
   * Função formatterObject
   * 
   * Esta função formata um objeto do tipo IPerson, adicionando informações adicionais sobre os filmes relacionados.
   * 
   * @param {IPerson} object - O objeto IPerson que será formatado.
   * @returns {Promise<Object>} - Uma Promise que resolve em um objeto formatado.
   */
  async function formatterObject(object: IPerson) {
    const array = []

    // Itera pelos filmes da pessoa para buscar informações adicionais.
    for (const film of object.films) { 

      // Extrai o ID do filme a partir da URL.
      const arrCutString = film.split('/')
      const cutId = arrCutString[arrCutString.length -2]

      // Busca informações sobre o filme com base no ID
      const findFilm = await getFilmsById(+cutId)

      // Cria um objeto com informações relevantes sobre o filme.
      const objectFilm = {
        release_date: findFilm.release_date,
        title: findFilm.title
      }

      array.push(objectFilm)
    }

    // Cria um objeto formatado com informações sobre a pessoa e os filmes.
    const tempObject: PersonFormatted = {
      name: object.name,
      infos: [
        {label: 'Ano de Nascimento', value: object.birth_year},
        {label: 'Gênero', value: object.gender},
        {label: 'Cor dos Olhos', value: object.eye_color},
      ],
      films: array
    }

    return tempObject 
  }

  /**
   * Uso de useQuery para buscar detalhes de um personagem por ID.
   * 
   * A função useQuery é usada para buscar dados com base na chave ['person', id].
   * - A chave 'person' indica o tipo de busca ou recurso.
   * - 'id' é a identificação única da pessoa que está sendo buscada.
   * 
   * @returns {Object} - Um objeto contendo os dados da pessoa, após formatação, se estiverem disponíveis.
   */
  const { data } = useQuery(['person', id], async () => {
    // Busca os dados da pessoa por ID.
    const data = await getPersonById(id)
    if (!data) return 

    // Formata os dados de personagens junto com o film.
    const response = await formatterObject(data)
    return response
  })

  return data && (
    <Container>

      <section>
        
        <img src={image} alt="Imagem do personagem" />

        <div className="content">
          <article className="card-info">

            <header>
              <h2>{data.name}</h2>
            </header>

            <section>
            
              {
                React.Children.toArray(data.infos.map(({ label, value }) => (
                  <div>
                    <h3>{ label }</h3>
                    <span>{ value }</span>
                  </div>
                )))
              }

            </section>
              
          </article>

          <footer>
          {
            React.Children.toArray(data.films.map(({ release_date, title }) => (
              <article className="card-film">
                <h3>{ title }</h3>
                <span>{ release_date }</span>
              </article>
            )))
          }            
        </footer>
          
        </div>
  
      </section>
    </Container>
  )
}