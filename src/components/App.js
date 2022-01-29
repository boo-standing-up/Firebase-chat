import React, { useState } from 'react';
import SignIn from './Singin';
import Main from './main';

export default () => {
  const [name,setName]=useState('');
  console.log({name});
  if (name===""){
    return<SignIn setName={setName}/>;
  }
  
  else{
  return<Main name={name}/>;}
};