// const heading = React.createElement('h2', { id: 'heading' }, 'Namaste React from self')
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'NamasteDevelopers child1 h1'),
        React.createElement('h2', {}, 'NamasteDevelopers child1 h2')]
    ),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'NamasteDevelopers child2 h1'),
        React.createElement('h2', {}, 'NamasteDevelopers child2 h2')]
    )])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)