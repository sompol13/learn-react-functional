import React from 'react';
import { useApp } from '../contexts/app-context';

const ThirdLevel = props => {
  const { getTheme, toggleTheme } = useApp();
  
  console.log('[ThirdLevel] re-render');

  return (
    <div>
      <h4 onClick={toggleTheme}>ThirdLevel: {getTheme()}</h4>
    </div>
  )
}

export default ThirdLevel
