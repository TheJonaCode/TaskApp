import {createContext, useReducer} from 'react';
import appReducer from './AppReducer';

const initialState = {
    tasks: [
      {
        id: "1",
        title: "some title",
        description: "some description",
        done: false,
      },
      {
        id: "2",
        title: "second title",
        description: "another description",
        done: false,
      },
    ],
  };
  
  export const GlobalContext = createContext(initialState);

  export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addTask = (task) => {
      dispatch({ type: 'ADD_TASK', payload: {id: 1, title: "nuevo"} });
    }

    const deleteTask = () => {
      dispatch({ type: 'DELETE_TASK' })
    }

    return (
      <GlobalContext.Provider value={{...state, addTask, deleteTask}}>
        {children}
      </GlobalContext.Provider>
    )
  }