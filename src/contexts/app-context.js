import React, { useContext, useState, useReducer, useMemo } from 'react'

const AppContext = React.createContext();

const initialState = {
  theme: 'light',
  token: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        token: action.token,
      };
    case 'TOGGLE_THEME':
      return {
        ...prevState,
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      };
    default: 
      return {
        ...prevState,
      }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appStore = useMemo(() => {
    return {
      getToken: () => {
        return state.token
      },
      restoreToken: (token) => {
        dispatch({ type: 'RESTORE_TOKEN', token });
      },
      getTheme: () => {
        return state.theme;
      },
      toggleTheme: () => {
        dispatch({ type: 'TOGGLE_THEME' });
      }
    }
  }, [state])
  // }, [state.theme])

  return (
    <AppContext.Provider value={appStore}>
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  return useContext(AppContext);
}

export {
  AppProvider,
  useApp,
}
