import logo from './logo.png';
import React, {useState, useEffect} from 'react';
import Data from "./db.json";
function Nav(/*props*/) {

    const [query, setQuery] = useState("");

    const output = Data.products.map(products => products.name);
    
    console.log("output"+output);
   
    return(
        <header>
            <img src={logo} className="App-logo" alt="logo" width="80" height="80" />
      
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="/products">Products</a>
                <a href="#contact">Contact</a>
                <input type="text" id="searchBox" placeholder="Search.." onChange={event => setQuery(event.target.value)}/>
             </div>
        </header>
        
    
        
        
    
        
  
  );
}

export default Nav;