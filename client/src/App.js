// imported components
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import HomeNav from './components/HomeNav';
import SignIn from './pages/Login';
import Waitlist from './pages/Waitlist';
import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap style sheet
<link rel="stylesheet"href="https://cdn.jsdelivr.net/npmbootstrap@5.1.0/dist/css/bootstrap.min.css"integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"crossorigin="anonymous"/>



const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <HomeNav />



    </ApolloProvider>
    )
    
}

export default App;
