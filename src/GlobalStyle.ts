import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* Fonts */
  --numans: "Numans", sans-serif;
  --work-sans: "Work Sans", sans-serif;
  --raleway: "Raleway", sans-serif;


/* Color */
  --background: #1E1E1E;
  --white: #FFFFFF;
  --green: #45E3B8;
  --card: #212325;
  --gray-light-1: #E1E1E1;
  --gray-light-2:#909093;


  --radius: 3rem;
  
}

body {
    paddig:0;
    margin:0;
    box-sizing:border-box;
    background:var(--background);
    color:var(--white);
    min-height: 100vh;
    height: auto;
    width:100%;
    font-family:var(--work-sans);
}

li{
  list-style:none;
}

a{
  text-decoration:none;
  color:inherit;
}


`;
