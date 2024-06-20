import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* Fonts */
  --numans: "Numans", sans-serif;
  --work-sans: "Work Sans", sans-serif;
  --raleway: "Raleway", sans-serif;

  --font-small: 0.8rem;


/* Color */
  --background: #0D0D0D; 
  --gray-medium: #151718;
  --btn-dark-gray: #1A1D1E;
  --white: #FFFFFF;
  --green: #45E3B8;
  --card: #212325; 
  --gray-light-1: #E1E1E1;
  --gray-light-2:#909093;
  --red: #ff1a1a;


  --radius: 3rem;
  
}


html, body, #root {
    paddig:0;
    margin:0;
    box-sizing:border-box;
    background:var(--background);
    color:var(--white);
    height: 100vh;
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
