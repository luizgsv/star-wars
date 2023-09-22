import { ReactComponent as Stormtroopers } from '@src/Assets/Img/Stormtroopers .svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Li } from './styles'

export function Home() {

  const anchors = [
    {
      link: '/character',
      label: 'Personagens',
      isActive: true
    },
    {
      link: '/films',
      label: 'Filmes',
      isActive: false
    },
    {
      link: '/starChips',
      label: 'Naves Estelares',
      isActive: false
    },
    {
      link: '/vehicles',
      label: 'Veículos',
      isActive: false
    },
    {
      link: '/species',
      label: 'Espécies',
      isActive: false
    },
    {
      link: '/planets',
      label: 'Planetas',
      isActive: false
    }
  ]

  return (
    <Container>
      
      <nav>
        <ul>
          {React.Children.toArray(anchors.map(({ label, link, isActive }) => (
            isActive ? (
              <Li isActive={isActive}>
                <Link to={link}>
                  {label}
                </Link>
              </Li>
            ) : <Li isActive={isActive}>{ label }</Li> 
          )))}
        </ul>
      </nav>

      <section className='image-area'>
        <Stormtroopers />
      </section>
    </Container>
  )
}