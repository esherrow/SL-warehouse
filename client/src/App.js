import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache,  ApolloProvider } from '@apollo/client';
import HomeNav from './components/HomeNav';
import Home from './pages/Home';

import SignIn from './pages/Login';
import Units from './pages/Units';
import Waitlist from './pages/Waitlist';

import 'bootstrap/dist/css/bootstrap.min.css';






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
        </Switch>
        </div>
        </div>
    </Router>
    </ApolloProvider>
    )
    
}

export default App;
