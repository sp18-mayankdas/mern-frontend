import { Outlet } from "react-router-dom";
import Login from "./sections/Login";

export default function App() {
  return (
    <div>

      <h1>Login</h1>

      <Outlet />
    </div>
  )
}