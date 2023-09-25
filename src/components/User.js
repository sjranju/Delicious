import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        // console.log(this.props.name + 'Child Constructor')
    }

    componentDidMount() {
        // console.log(this.props.name + 'Child componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount' + ' ' + this.state)
    }

    render() {
        console.log(this.props.name + 'Child Render')
        const { name, gitLink, profilePic } = this.props

        return (
            <div className="flex flex-col items-center justify-center text-lg rounded-md border border-slate-400 p-4 space-y-2">
                <img src={profilePic} className="w-20 h-20 rounded-full"></img>
                <h2 className="text-md font-semibold">{name}</h2>
                <a href={gitLink} className="text-xs">Git Hub Profile</a>
            </div >
        )
    }
}

export default UserClass