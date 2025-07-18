import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        console.log(this.props.name + " UserClass Constructor is called: ")

        this.state = {
            count1: 18,
            count2: 23,
            user: {
                name: " Raj",
                age: 22,
            }
        }
    }

    componentDidUpdate(){
        console.log("Component did Update")
    }
    async componentDidMount() {
        console.log(this.props.name + " UserClass did Mount...")

        const data = await fetch("https://api.github.com/users/sp18-mayankdas")

        const response = await data.json();

        console.log("API is called....." , response)

        this.setState({
            user: {...this.state.user , name:response.name}
        })
    }


    render() {
        console.log(this.props.name + " Userclass render is called..")
        const { name, age, profession } = this.props;
        const { count1, count2 , user } = this.state
        return (
            <div className="userCard">
                <div>
                    {/* <button onClick={() => this.setState({ count1: count1 + 1 })}>Update Count</button> */}


                    <button onClick={() => this.setState(
                        {
                            count1: count1 + 1,
                            count2: count2 + 3,
                        }
                    )}>
                        Update Count
                    </button>
                    <span>Count1: {this.state.count1}</span>
                    <span>Count2: {this.state.count2}</span>
                </div>
                {/* <h1>{this.props.name}</h1> */}
                <h1>{user.name}</h1>
                {/* <p>{this.props.age}</p> */}
                <p>{user.age}</p>
                <p>{profession}</p>

            </div>
        )
    }
}

export default UserClass;


// export default function UserClass() {
//     const [state, setState] = useState(0);
//     console.log("Starting Of Component", state);

//     function abc() {
//         console.log("Inside ABC function first console before setting the state", state);
//         setState(state=>state+10);
//         setState(state=>state+10);
//         console.log("Inside ABC function second console after setting the state", state=>state+10);
//     }
//     return (
//         <button onClick={() => {
//             console.log("Inside Onclick first log", state);
//             abc();
//             console.log("Inside Onclick after calling ABC function", state);
//         }}>{state}</button>
//     )
// }