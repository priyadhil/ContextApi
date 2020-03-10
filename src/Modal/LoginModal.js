import React from 'react';
import ReactDOM from 'react-dom';

export const LoginModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='modalBackdrop' />
            <div className='modalBox'>
            <div className='modal-header'>
                <div className='modalTitle'><p>Modal</p></div>
                <div  className="modal-close-button" >
                    <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <p>
            Hello, I'm a modal.
            </p>
        </div>
        </React.Fragment>, document.getElementById('modalRoot')
    ) : null;
    