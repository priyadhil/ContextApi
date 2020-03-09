import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';
// import {ModalContext} from './../contexts/ModalContext';

export default class NavBar extends Component {    
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const {isLightTheme, light, dark} = themeContext;
          const theme = isLightTheme ? dark : light;        
          const {isAuthendicated, toggleAuth} = authContext;

          return (
            <nav style={{background: theme.ui, color: theme.syntax}}>
              <div className='heading'>
                <h1> Skill Set </h1>
                <div className='display' onClick={toggleAuth}>
                    {isAuthendicated ? <LoginModal /> : 'Log In' }
                </div>  
              </div>
              <div className='heading'>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                <div className='display'>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          );
        }}</ThemeContext.Consumer> 
      )}</AuthContext.Consumer>
    );
  }
}

