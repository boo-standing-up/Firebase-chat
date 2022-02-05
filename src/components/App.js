import React, { useState } from 'react';
import SignIn from './Singin';
import Main from './main';
import config from '../config.json';


export default () => {
  const [name,setName]=useState('');
  console.log({name});
  if (config.SignInEnabled && name===""){
    return<SignIn setName={setName}/>;
  }
  
  else{
  return<Main name={name}/>;}
};