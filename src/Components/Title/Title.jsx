import React from 'react';
import './Title.css'

const Title = ({SubTitle, Title}) => {
  return (
    <div className='title'>
       <h1>{Title}</h1>
       <h2>{SubTitle}</h2>
      
    </div>
  );
}

export default Title;
