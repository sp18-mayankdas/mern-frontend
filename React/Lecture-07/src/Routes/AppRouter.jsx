import App from "../App";
import Home from "../sections/Home";
import Login from "../sections/Login";


const AppRouter = [

    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Login /> },
        ]
    },
    { path: "/home", element: <Home /> }


]

export default AppRouter;