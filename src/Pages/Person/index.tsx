import { apiStarWars } from "@src/Hook/api"
import { IPerson } from "@src/Models/Interfaces/person"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export function Person() {

  const { id } = useParams()

  const getPersonById = async (id?: string) => {

    if (!id) throw new Error("Id indefinido");     
    
    try {
      const { data } = await apiStarWars.get<IPerson>(`https://swapi.dev/api/people/${id}`)
      return data
    } catch (error) {
      throw new Error("Erro ao buscar dados de um personagem"); 
    }

  }

  const { data } = useQuery(['person', id], async () => getPersonById(id))

  return (
    <>
    
      <h1>Personagem com id {id}</h1>
     {data && <p> {JSON.stringify(data)} </p>}
    </>
  )
}