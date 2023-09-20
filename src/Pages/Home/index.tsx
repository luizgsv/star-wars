import { ReactComponent as Stormtroopers } from '@src/Assets/Img/Stormtroopers .svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Home() {

  const anchors = [
    {
      link: '/character',
      label: 'Personagens'
    },
    {
      link: '/films',
      label: 'Filmes'
    },
    {
      link: '/starChips',
      label: 'Naves Estelares'
    },
    {
      link: '/vehicles',
      label: 'Veículos'
    },
    {
      link: '/species',
      label: 'Espécies'
    },
    {
      link: '/planets',
      label: 'Planetas'
    }
  ]

  return (
    <Container>
      
      <nav>
        <ul>
          {React.Children.toArray(anchors.map((item) => (
            <li>
              <Link to={item.link}>
                {item.label}
              </Link>
            </li>
          )))}
        </ul>
      </nav>

      <section className='image-area'>
        <Stormtroopers />
      </section>
    </Container>
  )
}