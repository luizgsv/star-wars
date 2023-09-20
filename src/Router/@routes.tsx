import { Home } from "@src/Pages/Home";
import { PageNotFound } from "@src/Pages/NotFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultElement } from "./default";
import { Character } from "@src/Pages/Character";

/**
 * @function RouterProvider Provider de rotas da aplicação
 * @returns 
 */
export function RouterProvider() { 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
        <Route path='' element={<DefaultElement />}  >
          <Route path='home' element={<Home />} />
          <Route path='Character' element={<Character />} />
        </Route>

        <Route  path='*' Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  )
}