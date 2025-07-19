import App from "../App";
import Home from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import ErrorComponent from "../components/ErrorComponent";
import Cards from "../components/Cards";


const Routes = [

    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/cards/:id", element: <Cards /> }
        ]
    }
]

export default Routes;