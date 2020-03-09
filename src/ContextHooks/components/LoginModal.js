import React, {useState, useContext} from 'react';
import Modal from './Modal';
import ModalContext from '../contexts/ModalContext';

export default function LoginModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const modalNode = useContext(ModalContext);

  return (
    <ModalContext>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div>
              <label>Name : </label>
              <input />
            </div>  
          </Modal>
        )}
    </ModalContext>
  );
}

