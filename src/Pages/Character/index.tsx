import { ButtonStyle } from "@src/Components/Button/styles";
import { Card } from "@src/Components/Card";
import { apiStarWars } from "@src/Hook/api";
import { IPerson } from "@src/Models/Interfaces/person";
import { IRoot } from "@src/Models/Interfaces/root";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from "react";
import { Container } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export function Character() {

  const [peopleData, setPeopleData] = useState<IRoot<IPerson>>()

  const { search } = useLocation()

  const navigate = useNavigate();

  const params = search ? search : '?page=1'

  const getCharacter = async (params: string) => {
    const { data } = await apiStarWars.get<IRoot<IPerson>>(`/people${params}`)

    setPeopleData((prevState)=> ({...prevState, ...data, results: [...prevState?.results ?? [], ...data.results]}))
  }

   useQuery(['character', params], async () => getCharacter(params))
  
  const handlePagination = async (link: string) => {
    const cutSearch = link.split('/').pop() ?? ''
    navigate('/character' + cutSearch)
  }

  //link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  
  return (
    <Container>
      {peopleData && ( 

        <section>
          <ButtonStyle onClick={() => handlePagination(peopleData.previous)}>
            <ChevronLeft />
          </ButtonStyle>

          <article>
            {React.Children.toArray(
              peopleData.results?.map(({ name, url }) => (
                <Card value={name} link={'/person'} request={url} />
              )))
            }
          </article>
          
          <ButtonStyle onClick={() => handlePagination(peopleData.next)}>
            <ChevronRight />
          </ButtonStyle>

        </section>
      )}

    </Container>
  )
}