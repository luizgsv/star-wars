
import { GoBack } from "@src/Components/GoBack";
import { Header } from "@src/Components/Header";
import { objectSubTitle } from "@src/Hook/subTitle";
import { Outlet, useLocation } from "react-router-dom";

/**
 * Componente DefaultElement
 * 
 * Este componente fornece uma estrutura de layout padrão para as páginas do aplicativo.
 * Inclui um cabeçalho com um subtítulo dinâmico, o conteúdo da página (Outlet) e um botão de retorno.
 * 
 * @returns {JSX.Element} - Retorna um elemento JSX que representa a estrutura de layout padrão.
 */
export function DefaultElement() {

  const location = useLocation()
  const cutPathname = location.pathname.split('/')[1]
  
  return (
    <>
      <Header subTitle={objectSubTitle[cutPathname]} />
      <Outlet />
      <GoBack />
    </>
  )
}