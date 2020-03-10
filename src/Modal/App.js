import React from 'react';
import './../ContextHooks/style/modalstyle.css';
import {LoginModal} from "./LoginModal";
import useModal from './useModal';

const App = () => {
  const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <LoginModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default App;