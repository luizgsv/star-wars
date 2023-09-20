import { ReactNode } from "react";
import { Layout } from "./styles";

export function SystemLayout({ children }: { children: ReactNode }) {

  return (
    <Layout>
      {children}
    </Layout>
  )
}