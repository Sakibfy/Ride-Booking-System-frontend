import { Outlet } from "react-router";
import CommonLayout from "./components/layout/Commonlayout";


const App = () => {
  return (
    <CommonLayout>
    <Outlet />
  </CommonLayout>
  );
};

export default App;