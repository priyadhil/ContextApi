import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? dark : light;

        return (
            <div className='bookList' style={{ background: theme.dg, color: theme.syntax}}>
                <ul>
                    <li style={{background: theme.ui}}>Javascript</li>
                    <li style={{background: theme.ui}}>ReactJS</li>
                    <li style={{background: theme.ui}}>OOP PHP</li>
                    <li style={{background: theme.ui}}>Symfony</li>
                </ul>
            </div>
        )
    }
}
