import React from "react"
import ReactDOM from "react-dom"

// const heading = React.createElement('h2', { id: 'heading' }, 'Namaste React from self')
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'NamasteDevelopers child-1 h1'),
        React.createElement('h2', {}, 'NamasteDevelopers child-1 h2')]
    ),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'NamasteDevelopers child-2 h1'),
        React.createElement('h2', {}, 'NamasteDevelopers child-2 h2')]
    )])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)