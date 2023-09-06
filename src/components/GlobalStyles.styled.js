import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{  
    height: 100vh;
    overflow: hidden;
    padding: 20px;
  background: linear-gradient(0.25turn, #ec7fff, #ebf8e1, #f69d3c);
  background-repeat: no-repeat;
}
ul{
    list-style: none;
}
button{
  display: block;
  float: left;
  position: relative;
  text-decoration: none;
  color: #333;
  border: 3px solid #333333;
  padding: 20px 30px;
  margin: 40px;
}

button:after {
  content: '';
  border: 3px solid #3600fc;
  top: 5px;
  left: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  color: #f2f2f2;
  white-space:nowrap;
}

button:active {
  top: 3px;
  left: 3px;
}

button:active:after{
  top: 2px;
  left: 2px
}

button:hover{
  background: rgba(242,242,242,1);
}

#root{
    display: flex;
    flex-direction: column;
}
`;
