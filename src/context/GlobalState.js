import {createContext} from 'react';

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
        title: "some title",
        description: "some description",
        done: false,
      },
    ],
  };
  
  export const GlobalContext = createContext(initialState);