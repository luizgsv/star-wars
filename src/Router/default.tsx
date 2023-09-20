
import { GoBack } from "@src/Components/GoBack";
import { Header } from "@src/Components/Header";
import { objectSubTitle } from "@src/Hook/subTitle";
import { Outlet, useLocation } from "react-router-dom";

export function DefaultElement() {

  const location = useLocation()
  const cutPathname = location.pathname.substring(1)
  
  return (
    <>
      <Header subTitle={objectSubTitle[cutPathname]} />
      <Outlet />
      <GoBack />
    </>
  )
}