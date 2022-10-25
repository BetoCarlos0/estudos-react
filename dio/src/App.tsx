// para instalar bibliotecha router = yarn add react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home'
import {Login} from './pages/login'
import {Feed} from './pages/feed'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/feed" element={<Feed></Feed>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
