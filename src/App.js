import Home from "./components/Home";
import "./reset.css";
import "./App.css";
import SubMenu from "./components/home/SubMenu";
import Main from "./components/home/Main";
import Header from "./components/home/Header";
import { Route, Switch } from "react-router";
import PlayList from "./components/PlayList";
import Letter from "./components/Letter";
import Replay from "./components/Replay";
import Mini from "./components/Mini";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <SubMenu></SubMenu>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/mini" component={Mini}></Route>
        <Route path="/playlist" component={PlayList}></Route>
        <Route path="/letter" component={Letter}></Route>
        <Route path="/replay" component={Replay}></Route>
        <Route component={NotFound} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
