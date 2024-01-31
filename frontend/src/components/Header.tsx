import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header=()=>{
  const {isLoggedIn} = useAppContext();
    return (
        <div className="bg-blue-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            <Link to="/" className="text-white hover:text-gray-200">mern<span className="text-green-500">Hotel</span>.com</Link> {/* Added a span for the "Hotel" part */}
          </span>
          <span className="flex items-center space-x-2">
            {isLoggedIn? <>
               <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-bookings">
                My Bookings</Link>
               <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-hotels">My Hotels</Link>
               <SignOutButton/>
            </>:(
                <Link to="/sign-in" className="flex items-center text-white hover:text-gray-200 px-3 font-bold transition duration-300">
                Sign in
              </Link>
            )}
          
          </span>
        </div>
      </div>
    )
}

export default Header;