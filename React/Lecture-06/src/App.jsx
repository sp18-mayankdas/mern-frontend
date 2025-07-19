import { Outlet } from "react-router-dom";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>Routing</h1>

      <Outlet />

    </div>
  )
}