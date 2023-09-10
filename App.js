import React from "react"
import ReactDOM from "react-dom/client"

// JSX => Babel converts it to React.createElement => ReactElement - JS Object => HTMLElement (render)
const TitleComponent = () => <h1 className="title" tabIndex={5}>Namaste React!</h1>
const ReactComponent = () => (
    <div id="main">
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {TitleComponent()}
        {TitleComponent()}
        {TitleComponent()}
        <h1>This is a React Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ReactComponent />)