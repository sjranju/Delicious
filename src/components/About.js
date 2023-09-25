import React from "react";
import UserClass from "./User";

class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log('Parent Constructor')

        this.state = {
            userData: {
                login: 'Default',
                gitLink: 'link',
                profilePic: 'picture'
            }
        }
    }

    async componentDidMount() {
        const api = await fetch('https://api.github.com/users/sjranju')
        const json = await api.json()
        this.setState({ userData: json })
        console.log('json', json)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        // console.log('Parent Render')
        const { login, avatar_url, html_url } = this.state.userData

        return (
            <div className="flex flex-col items-center justify-center mt-24 space-y-6">
                <h2>This is About Class Component</h2>
                <UserClass name={login} gitLink={html_url} profilePic={avatar_url} />
            </div>
        )
    }
}

export default About

{/**

    - Parent Constructor
    - Parent Render

        - 1Ranjana Constructor
        - 1Ranjana Render

        - 2Ranjana Constructor
        - 2Ranjana Render

        - 3Ranjana Constructor
        - 3Ranjana Render

        - 1Ranjana componentDidMount
        - 2Ranjana componentDidMount
        - 3Ranjana componentDidMount

    - Parent componentDidMount

*/}