import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import ModalContext from './../contexts/ModalContext';

export default function Modal({onClose, children, ...props }) {
    const modalNode = useContext(ModalContext);
    debugger;

    return (ReactDOM.createPortal (
            <div className={'modalWrapper'}>
                <div className={'modalBackdrop'} />
                <div className={'modalBox'} {...props}>
                    {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>, document.getElementById('modalRoot'))
    );
}
