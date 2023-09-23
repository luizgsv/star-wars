import { ReactComponent as Stormtroopers } from '@src/Assets/Img/Stormtroopers .svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Li } from './styles'

export function Home() {

  /**
   * Array de âncoras de navegação
   * 
   * Este array contém objetos que representam âncoras de navegação para diferentes seções ou páginas.
   * Cada objeto possui as seguintes propriedades:
   * - link: A URL da âncora.
   * - label: O rótulo ou texto a ser exibido para a âncora.
   * - isActive: Uma flag para indicar se a âncora está atualmente ativa.
   */
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
          {
            React.Children.toArray(anchors.map(({ label, link, isActive }) => (
              <Li isActive={isActive}>
                {isActive ? <Link to={link}>{label}</Link> : label}
              </Li>
            )))
          }
        </ul>
      </nav>

      <section className='image-area'>
        <Stormtroopers />
      </section>
    </Container>
  )
}