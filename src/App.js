import Home from "./pages/homepage";
import PostPage from "./pages/postpage";
import Navbar from "./components/navbar";
import LogIn from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import WritingPage from "./pages/writingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write">{user ? <WritingPage /> : <LogIn />}</Route>
        <Route exact path="/post/:id" component={PostPage} />
        <Route path="/settings">{user ? <Settings /> : <LogIn />}</Route>
        <Route path="/login">{user ? <Home /> : <LogIn />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
