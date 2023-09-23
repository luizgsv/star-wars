import { Home } from "@src/Pages/Home";
import { PageNotFound } from "@src/Pages/NotFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultElement } from "./default";
import { Character } from "@src/Pages/Character";
import { Person } from "@src/Pages/Person";

/**
 * Componente RouterProvider
 * 
 * Este componente configura as rotas de navegação para o aplicativo usando o React Router.
 * 
 * @returns {JSX.Element} - Retorna um elemento JSX que configura as rotas de navegação.
 */
export function RouterProvider() { 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/star-wars/" element={<Navigate to='/home' />} />
        <Route path='' element={<DefaultElement />}  >
          <Route path='home' element={<Home />} />
          <Route path='Character' element={<Character />} />
          <Route path='Person/:id' element={<Person />} />
        </Route>

        <Route  path='*' Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  )
}