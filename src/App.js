import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import ProductsView from "./ProductsView";
import ProductView from "./ProductView";
import Footer from "./Footer";


function App() {  
  return (
    <Router>
      <div>
        <Header />
        <SideBar />
        <Route exact path="/" component={ProductsView} />
        <Route path="/product/:id" render={(props) => <ProductView {...props}/>} />
        <Route path="/topics" component={Topics} />
        <Footer />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//   );
// }

export default App;