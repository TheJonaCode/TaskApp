import {Route, Routes} from 'react-router-dom';

import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading/>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/add' element={<TaskForm/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
