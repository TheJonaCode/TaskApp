import {Route, Switch} from 'react-router-dom';

import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  return (
    <div>
      <Heading/>

      <TaskList/>
    </div>
  );
}

export default App;
