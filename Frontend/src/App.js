import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Destinations from './Pages/Destinations';
import Book from './Pages/Book';
import SearchResults from './Pages/SearchResults';
import SignIn from './Pages/SignIn';
import Contact from './components/Contact/ContactUs';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Tahiti from './components/Tahitii';



function App() {
  return (
     <Router>
      <div>
      <Navbar />
        
         <Routes>
         {/* <Route path="/search-results" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/About" element={<About />} />  
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Book" element={<Book />} /> 
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes> 

        {/* <Search />
        <SearchResults /> */}
        
      </div>
   
        
     </Router>
  );
}

export default App;



