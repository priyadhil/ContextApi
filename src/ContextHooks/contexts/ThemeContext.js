import React, {Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#333', ui: '#b3b1b1', dg: '#555' },
        dark: {syntax: '#ddd', ui: '#333', dg: '#555' },
    }

    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    render() {
        return (
            <ThemeContext.Provider 
             value={{...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

