import { ButtonStyle } from "@src/Components/Button/styles";
import { Card } from "@src/Components/Card";
import { InputComponent } from "@src/Components/Input";
import { apiStarWars } from "@src/Hook/api";
import { IPerson } from "@src/Models/Interfaces/person";
import { IRoot } from "@src/Models/Interfaces/root";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Character() {

  const { search } = useLocation()

  const navigate = useNavigate();

  const params = search ? search : '?page=1'

  const [peopleDataFilter, setPeopleDataFilter] = useState<IRoot<IPerson>>()

  const getCharacter = async (params: string) => {
    const { data } = await apiStarWars.get<IRoot<IPerson>>(`/people${params}`)
    return data
  }

  const { data: peopleData } = useQuery(['character', params], async () => getCharacter(params))
  
  /**
   * Função handlePagination
   * 
   * Esta função é chamada para lidar com a paginação de resultados de pesquisa.
   * 
   * @param {string} link - O link da página de destino para a qual a paginação deve ocorrer.
   */
  const handlePagination = async (link: string) => {
    const cutSearch = link.split('/').pop() ?? ''
    getCharacter(cutSearch)
    navigate('/character' + cutSearch)
  }

  /**
   * Função handleSearch
   * 
   * Esta função é chamada em resposta a eventos de mudança em um input e realiza uma pesquisa de filtragem.
   * 
   * @param {ChangeEvent<HTMLInputElement>} event - O evento de mudança que acionou a função.
   */
  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value.toLowerCase();

    if (!inputValue) return setPeopleDataFilter(undefined)

    if (!peopleData) return;

    const filter = peopleData.results.filter(({ name }) => {
      return !name.toLowerCase().indexOf(inputValue)
    })

    setPeopleDataFilter({...peopleData, results: filter})
  };

  const charactersData = peopleDataFilter ?? peopleData

  return (
    <Container>

      {!peopleDataFilter && (
        <ButtonStyle onClick={() => charactersData && handlePagination(charactersData.previous)}>
          <ChevronLeft />
        </ButtonStyle>
      )}

      {charactersData && ( 

        <section>
          <InputComponent handleSearch={handleSearch}/>
          <article>  
            {React.Children.toArray(
              charactersData.results.map(({ name, url }) => (
                <Card value={name} link={'/person'} request={url} />
              )))
            }
          </article>


        </section>
      )}

      {!peopleDataFilter && (          
        <ButtonStyle onClick={() => charactersData && handlePagination(charactersData.next)}>
          <ChevronRight />
        </ButtonStyle>
      )} 

    </Container>
  )
}