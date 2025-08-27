import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Overview from "../pages/Overview";
import FinancialGoal from "../pages/FinancialGoal";
import OpenFinance from "../pages/OpenFinance";
import Transactions from "../pages/Transactions";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
           {/*Rotas padrões*/}
           <Route path="overview" element={<Overview />}></Route>
           <Route path="financial-goal" element={<FinancialGoal />}></Route>
           <Route path="open-finance" element={<OpenFinance />}></Route>
           <Route path="transactions" element={<Transactions />}></Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
        {/*rotas de autenticação*/}
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
