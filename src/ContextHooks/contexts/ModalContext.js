import React, { useState, createContext, useRef, useEffect} from 'react'

export const ModalContext = createContext();

export default function ModalContextProvider({children}) {
    const modalRef = useRef();
    const [context, setContext] = useState();

    useEffect(() => {
      setContext(modalRef.current);
    }, []);
  
    return (
      <div className='modalContainer'>
        <ModalContext.Provider value={context}>
            {children}
        </ModalContext.Provider>
        <div ref={modalRef} />
      </div>
    );
}