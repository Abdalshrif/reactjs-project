import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
import PostInfo from "./PostInfo";
import Create from "./Create";
import Edit from "./Edit";
function Nave() {
    return (
     <>
      <BrowserRouter>
          
          <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Ex Company</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" >Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Posts" className="nav-link" >Posts</Link>
                  </li>
                
                  <li className="nav-item">
                    <Link to="/Create" className="nav-link" >Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link" >About</Link>
                  </li>

                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
<br/> <br/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Posts" element={<Posts/>}></Route>
          <Route path="/Posts/:id" element={<PostInfo/>}></Route>
          <Route path="/Edit/:id" element={<Edit/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Create" element={<Create/>}></Route> 
        </Routes>

      </BrowserRouter>
     </>      
    );
  }
  
  export default Nave;