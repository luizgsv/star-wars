import { Loading } from "@src/Components/Loading";
import { useIsFetching } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Layout } from "./styles";

/**
 * Componente SystemLayout
 * 
 * Este componente é responsável por envolver o conteúdo em um layout do sistema.
 * Ele também exibe um indicador de carregamento em andamento.
 * 
 * @param {ReactNode} children - Os elementos filhos que serão renderizados dentro do layout.
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o layout do sistema.
 */
export function SystemLayout({ children }: { children: ReactNode }) {

  const isFetchingCharacter = useIsFetching(['character'])
  const isFetchingPerson = useIsFetching(['person'])

  // Determina se a página está atualmente em processo de carregamento.
  const isLoading = !!(isFetchingCharacter | isFetchingPerson)

  return (
    <>
      {isLoading && <Loading />}
      <Layout isLoading={isLoading}> 
          {children}
      </Layout>
    </>
  )
}