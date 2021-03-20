import React from 'react';
import { useApp } from '../contexts/app-context';
import ThirdLevel from './ThirdLevel';

const SecondLevel = props => {
  const { getTheme, toggleTheme } = useApp();

  console.log('[SecondLevel] re-render');

  return (
    <div>
      <h4 onClick={toggleTheme}>SecondLevel: {getTheme()}</h4>
      <ThirdLevel></ThirdLevel>
    </div>
  )
}

export default SecondLevel
