import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import QuizContainer from "./Quiz/components/QuizContainer.jsx";
// import './Quiz/assets/style.css';
// import DragAndDrop from "./DragAndDrop/DragAndDrop";
// import './DragAndDrop/assets/ddstyle.css';
// import ImageUpload from "./FileUpload/ImageUpload";
// import AppHooks from './Roguelike/AppHooks';
// import DragableUploader from "./DragDropAndUpload/DragableUploader";
// import './DragDropAndUpload/style.css';
// import './ContextHooks/style/contextStyle.css';
// import './ContextHooks/style/modalstyle.css';
// import App from './Modal/App';
import FetchGitRepo from './FetchGitRepo/components/FetchGitRepo';
import './FetchGitRepo/tableStyle.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';

ReactDOM.render(<FetchGitRepo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
