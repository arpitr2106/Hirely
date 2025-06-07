import Header from "@/components/header";
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-7 text-center bg-gray-900 mt-10 text-xl">
        Made by Arpit Ranjan, IITG
      </div>
    </div>
  );
};


export default AppLayout
