import { ButtonStyle } from "@src/Components/Button/styles";
import { Card } from "@src/Components/Card";
import { apiStarWars } from "@src/Hook/api";
import { IPerson } from "@src/Models/Interfaces/person";
import { IRoot } from "@src/Models/Interfaces/root";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import React from "react";

export function Character() {

  const { search } = useLocation()

  const navigate = useNavigate();

  const params = search ? search : '?page=1'

  const getCharacter = async (params: string) => {
    const { data } = await apiStarWars.get<IRoot<IPerson>>(`/people${params}`)
    return data
  }

  const { data: peopleData } = useQuery(['character', params], async () => getCharacter(params))
  console.log(peopleData);
  
  const handlePagination = async (link: string) => {
    const cutSearch = link.split('/').pop() ?? ''
    getCharacter(cutSearch)
    navigate('/character' + cutSearch)
  }

  return (
    <Container>
      {peopleData && ( 

        <section>
          <ButtonStyle onClick={() => handlePagination(peopleData.previous)}>
            <ChevronLeft />
          </ButtonStyle>

          <article>
            {React.Children.toArray(
              peopleData.results.map(({ name, url }) => (
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