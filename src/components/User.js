import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        console.log(this.props.name + 'Child Constructor')
    }

    componentDidMount() {
        console.log(this.props.name + 'Child componentDidMount')
    }

    render() {
        console.log(this.props.name + 'Child Render')
        const { name, gitLink, profilePic } = this.props
        const { count } = this.state

        return (
            <div className="flex flex-col items-start justify-center text-lg rounded-md border border-slate-400 p-4">
                <h2>{name}</h2>
                <h2>{location}</h2>
                <p>{count}</p>
                <button className="border rounded-sm p-1"
                    onClick={() => { this.setState({ count: count + 1 }) }}>Increament Count</button>

            </div >
        )
    }
}

export default UserClass