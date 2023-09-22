/* eslint-disable no-debugger */
import { apiStarWars } from "@src/Hook/api"
import { IPerson } from "@src/Models/Interfaces/person"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "./styles"

export interface PersonFormatted {
  name: string
  infos: Info[]
  films: Film[]
}

export interface Info {
  label: string
  value: string
}

export interface Film {
  release_date: string
  title: string
}

export function Person() {

  const { id } = useParams()

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

  async function formatterObject(object: IPerson) {
    const array = []

    for (const film of object.films) { 
      const cutId = film.split('/').at(-2) ?? 0
      const findFilm = await getFilmsById(+cutId)

      const objectFilm = {
        release_date: findFilm.release_date,
        title: findFilm.title
      }

      array.push(objectFilm)
    }

    const tempObject = {
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

  const { data } = useQuery(['person', id], async () => {
    const data = await getPersonById(id)
    if (!data) return 
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
                  <ul>
                    <li>
                      <h3>{ label }</h3>
                    </li>
                    <li>
                      <span>{ value }</span>
                    </li>
                  </ul>
                )))
              }

            </section>
              
          </article>

          <footer>
          {
            React.Children.toArray(data.films.map(({ release_date, title }) => (
              <article className="card-film">
                <ul>
                  <li>
                    <h3>{ title }</h3>
                  </li>
                  <li>
                    <span>{ release_date }</span>
                  </li>
                </ul>
              </article>
            )))
          }            
        </footer>
          
        </div>
  
      </section>
    </Container>
  )
}