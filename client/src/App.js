import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache,  ApolloProvider } from '@apollo/client';

import HomeNav from './components/HomeNav';
import Home from './pages/Home';

import SignIn from './pages/Login';
import Units from './pages/Units';
import Waitlist from './pages/Waitlist';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>



const client = new ApolloClient({
  request: (operation) => {    
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache(),
  uri: "/graphql"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <HomeNav />
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/units" component={Units}/>
          <Route exact path ="/waitlist" component={Waitlist} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        </div>
        </div>
    </Router>
    </ApolloProvider>
    )
    
}

export default App;
