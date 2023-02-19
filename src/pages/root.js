import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
