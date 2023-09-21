import { Loading } from "@src/Components/Loading";
import { useIsFetching } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Layout } from "./styles";

export function SystemLayout({ children }: { children: ReactNode }) {

  const isFetchingCharacter = useIsFetching(['character'])

  const isLoading = !!isFetchingCharacter

  return (
    <>
      {isLoading && <Loading />}
      <Layout isLoading={isLoading}> 
          {children}
      </Layout>
    </>
  )
}