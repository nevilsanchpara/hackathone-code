import {BrowserRouter} from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Home from "./Components/Home";
import {Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' render={() => <Home />} />
      <Route
        path='/user'
        render={() => <HeaderComponent />}
        // <FooterComponent />;
      />
    </BrowserRouter>
  );
}

export default App;
