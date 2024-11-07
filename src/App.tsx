import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;list-style:none;text-decoration:none;box-sizing:border-box;font-family: "Bebas Neue", sans-serif;
font-weight: 400;
font-style: normal;}
a{color:inherit;}
body{color:${(props) => props.theme.white.lighter};background:${(props) =>
  props.theme.black.veryDark};}
`;
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}
