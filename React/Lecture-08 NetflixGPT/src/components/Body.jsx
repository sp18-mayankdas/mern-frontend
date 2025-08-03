import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export default function Body() {

    const AppRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
    ])
    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}
