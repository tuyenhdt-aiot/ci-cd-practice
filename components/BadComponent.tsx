import React from 'react';

const unused = 'I am unused'; 

export const BadComponent = (props: any) => { 
  console.log('Rendering BadComponent'); 

  return <div>This is a bad component</div>;
};
