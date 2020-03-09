import React from 'react'
import NavBar from './ContextHooks/components/NavBar'
import BookList from './ContextHooks/components/BookList'
// import Modal from './ContextHooks/components/Modal'
import LoginModal from './ContextHooks/components/LoginModal'
import ThemeContextProvider from './ContextHooks/contexts/ThemeContext'
import AuthContextProvider from './ContextHooks/contexts/AuthContext'

export default function App() {
    return (
        <div className='App'>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <NavBar />
                    <BookList />
                </AuthContextProvider>
            
            </ThemeContextProvider>
        </div>
    )
}
