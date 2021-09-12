import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache  } from '@apollo/client';

import HomeNav from './components/HomeNav';

import SignIn from './pages/Login';
// import Waitlist from './pages/Waitlist';

import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap style sheet
<link rel="stylesheet"href="https://cdn.jsdelivr.net/npmbootstrap@5.1.0/dist/css/bootstrap.min.css"integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"crossorigin="anonymous"/>



const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql',
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <HomeNav />
        <div>
        {/* <Switch> */}
        <Route exact path="/signin" component={SignIn} />
        {/* <Waitlist /> */}
        {/* </Switch> */}
        </div>
        </div>
    </Router>



    </ApolloProvider>
    )
    
}

export default App;
