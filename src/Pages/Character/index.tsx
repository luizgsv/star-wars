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
  
  const handlePagination = async (link: string) => {
    const cutSearch = link.split('/').pop() ?? ''
    getCharacter(cutSearch)
    navigate('/character' + cutSearch)
  }

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

      <InputComponent handleSearch={handleSearch}/>

      {charactersData && ( 

        <section>
          {!peopleDataFilter && (
            <ButtonStyle onClick={() => handlePagination(charactersData.previous)}>
              <ChevronLeft />
            </ButtonStyle>
          )}

          <article>  

            {React.Children.toArray(
              charactersData.results.map(({ name, url }) => (
                <Card value={name} link={'/person'} request={url} />
              )))
            }
          </article>

          {!peopleDataFilter && (          
            <ButtonStyle onClick={() => handlePagination(charactersData.next)}>
              <ChevronRight />
            </ButtonStyle>
          )}
        </section>
      )}

    </Container>
  )
}