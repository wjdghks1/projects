import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>Brandon's Website</h2>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/About">About</Link>
                </div>
        </div>
     );
}
 
export default Navbar;