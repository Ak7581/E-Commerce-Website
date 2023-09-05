import { Link } from "react-router-dom";
import { useNavigate,createSearchParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/cart";
import './Navbar.css'
const Navbar = ({cartItemCount}) => {

  const navigate = useNavigate();
  const { cart } = useCart()

  const [searchQuery,setSearchQuery] = useState('')

  const handleSubmit = (e) =>{
    // e.preventDefault();

    if(searchQuery.trim().length){
      // navigate(`/?${createSearchParams( { q : searchQuery.trim() }) }`)

    navigate({
       pathname : '/',
       search : createSearchParams({q : searchQuery.trim()}).toString()
     })

    }

    console.log(searchQuery);

   
      // navigate(`/?${createSearchParams( { q : searchQuery }) }`)
     //  navigate(`/?${createSearchParams( { q : searchQuery }) }`)
   
    // setSearchQuery('')
  }

  return (
    <>
      
      <nav className="navbar navbar-light bg-light  bg">
        <Link to="/" className="navbar-brand logos ">
            E-
            <br/>
            Commrece
        </Link>
        <form className="form-inline">
          <input
            
            className="form-control mr-sm-5 "
            type="search"

            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}

            placeholder="Search  produccts..."
            aria-label="Search"
          />

          <button className="btn btn-outline-success my-1 my-sm-0" onClick={handleSubmit} type="button">
            Search
          </button>
          <Link to="/cart" className="">
            <img  
              className="cartImg w-50 p-3 ml-5 "
              src="https://tse1.mm.bing.net/th?id=OIP.ciP_37wQXyjijBo5fjSfegHaHa&pid=Api&P=0&h=180"
              alt="cart"
            />
          </Link>

          <div className="cart_count">
          <p>{cart.length}</p>

          </div>
        </form>
      </nav>
    </>
  );
};
export default Navbar;
