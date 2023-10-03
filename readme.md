# Namaste React

## Episode 08 - Let's get classy

### Class based components
It is a class that extends React.Component and it has a render method that returns JSX

constructor will call parent class's constructor using super()

State can be intialized in constructor


### Component lifecycle methods
componentDidMount

componentDidUpdate

componentWillUnmount

## Episode 09 - Optimizing our App


### Modularity

It follows Single Responsibility principle so that your code becomes readable, maintainable, reusable and testable 

### Custom Hooks

Best practise it to start custom hook file names with "use" to let others/readers know that it is a custom hook

These are nothing a custom java script functions that returns a value which you can use it in your components

### Lazy loading/Dynamic bundling/Dynamic import/Code splitting/On-demand loading

lazy() is used for loading component on demand when user clicks or navigates to that route

import() function is used to bundle files seperately/ create seperate chunks and will be loaded when user clicks/navigates

## Episode 11 - Data is the new oil

### Higher Order Components

It is a JavaScript function that takes a component as input, enhances it and returns the enchanced component

### Layers in React Application

1 - UI Layer -> JSX 

2 - Data Layer -> Local variables, state, props, curly braces inside JSX that modifies the UI


### Controlled and Uncontrolled Controlled

If a component is being controlled by its parent or if a component is relying on its parent then it is called Controlled Component

If a component controlled by itself then it is called Controlled Component (having own state)


### Lifting the state up and COntext


## Episode 12 - Let's build out store

- Install @reduxjs/toolkit and react-redux 
- Build our store
- Connect store to our app
- Slice (CartSlice)
- dispatch action (addItem)
- Selector (subsribing to the store to get data)
- Redux Dev Tools