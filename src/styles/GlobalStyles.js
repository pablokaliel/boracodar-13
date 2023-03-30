  import { createGlobalStyle } from 'styled-components';
  
  export default createGlobalStyle`
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Source Sans Pro';
    background: rgba(17, 24, 39, 1);
  }
  #root,html,body{
    width: 100%;
    height: 100%;
  }
  
  button{
    cursor: pointer;
  }
  
  a{
  text-decoration: none;
  color: #7C3AED;
  }
  
  button{
    border:none;
    cursor: pointer;
  }
  `;