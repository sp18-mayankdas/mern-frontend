import React, { useState } from "react";
import UserClass from "../components/UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        console.log("About Parent Constructor is called...")
        this.state = {
            count: 87,
        }
    }

    componentDidMount() {
        console.log("About Parent did Mount...")
    }
    render() {
        const { count } = this.state;
        console.log("About Parent render Called...")
        return (
            <div className="about">
                <h2>About</h2>
                <button onClick={() => this.setState({ count: count + 1 })}>Increase Count: {count}</button>

                <div className="cards">
                    <UserClass name={"First"} age={22} profession={"Software Developer"} />

                    <UserClass name={"Second"} age={23} profession={"Frontend Developer"} />

                    
                </div>

            </div>
        )
    }
}

// export default function About() {
//     console.log("About Rendered...")
//     const [count, setCount] = useState(87);
//     return (
//         <div className="about">
//             <h2>About</h2>
//             <button onClick={() => { setCount(count + 1) }}>Increase Count: {count}</button>

//             <UserClass name={"Mayank"} age={22} profession={"Software Developer"} />
//         </div>)
// }

export default About;