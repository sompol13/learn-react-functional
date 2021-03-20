import React from 'react';
import SecondLevel from '../components/SecondLevel';

const FirstLevel = props => {
  console.log('[FirstLevel] re-render');

  return (
    <div>
      <h4>FirstLevel</h4>
      <SecondLevel></SecondLevel>
    </div>
  )
}

export default FirstLevel
