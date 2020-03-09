import React, { Component, createContext} from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isAuthendicated: false,
    }

    toggleAuth = () => {
        this.setState({isAuthendicated: !this.state.isAuthendicated});
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
