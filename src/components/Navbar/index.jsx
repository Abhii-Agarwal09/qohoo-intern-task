import './navbar.css';
import hamburger from '../../assets/hamburger.png';
import company from '../../assets/hotel.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/user.png';
import cart from '../../assets/cart.png';

const Navbar = () => {
  return (
    <div className="navbar_container flex">
      <div className="navbar_left_panel">
        <div className="flex">
          {/* Hanburger icon */}
          <img src={hamburger} alt="" />
        </div>
        <div className="flex">
          {/* Company logo */}
          <img src={company} alt="" />
        </div>
        <div className="nav_list_container flex">
          {/* Nav list */}
          <ul className="nav_list">
            <li>New</li>
            <li>Sale</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
      </div>
      <div className="navbar_right_panel">
        <div className="navbar_right_search flex">
          <p>
            <img src={notification} alt="" />
          </p>
          <p>Search</p>
        </div>
        <div className="flex">
          <p>
            <img src={cart} alt="" />
          </p>
          <p>
            <img src={profile} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
