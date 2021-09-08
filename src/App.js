// imported components
import './App.css';
import HomeNav from './components/HomeNav';
// import SignIn from './components/SignIn';
// import Units from './components/Units';
// import Waitlist from './components/Waitlist';
// import Faq from './components/Faq';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap style sheet
<link rel="stylesheet"href="https://cdn.jsdelivr.net/npmbootstrap@5.1.0/dist/css/bootstrap.min.css"integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"crossorigin="anonymous"/>




function App() {
  return (
    <>
    <HomeNav />
    {/* 
    <Units />
    <Waitlist />
    <Faq /> */}
    <Contact />
    {/* <SignIn /> */}


    </>
    )
    
}

export default App;
