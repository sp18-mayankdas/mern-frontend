import { useRouteError } from "react-router-dom"

export default function ErrorComponent() {

    const error = useRouteError();
    console.log(error)
    return (
        <div className="error">
            <h1>Oops!!! </h1>
            <h1>Something Went Wrong!!!</h1>
            <h3>{error.status + " " + error.statusText}</h3>
        </div>
    )
}
