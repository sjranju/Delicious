import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./header"

// JSX => Babel converts it to React.createElement => ReactElement - JS Object => HTMLElement (render)
const TitleComponent = () => <h1 className="title" tabIndex={5}>Namaste React!</h1>
const ReactComponent = () => (
    <div id="main">
        <Header />
        <TitleComponent />
        {<TitleComponent />}
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {<TitleComponent></TitleComponent>}
        {/* {TitleComponent} Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it */}
        <h1>This is a React Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ReactComponent />)