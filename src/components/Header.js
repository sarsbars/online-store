import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container flex space-between">
                <div className="title flex">
                    <h1>Cartsy</h1>
                    <div className="flex center search-bar">
                        <input type="text" placeholder="Search" className='search-bar-input' />
                    </div>
                </div>
                <nav className="flex gap-80 align-items">
                    <ul className="nav-list">
                        <li><NavLink className={navData => (navData.isActive ? 'active' : '')} to='/'>Home</NavLink></li>
                        <li><NavLink className={navData => (navData.isActive ? 'active' : '')} to='/detail'>Product</NavLink></li>
                        <li><NavLink className={navData => (navData.isActive ? 'active' : '')} to='/cart'>Cart</NavLink></li>
                        <li><NavLink className={navData => (navData.isActive ? 'active' : '')} to='/notfound'>BestSellers</NavLink></li>
                    </ul>
                    <a href="index.html" className="logout">Logout</a>
                </nav>
                <button className="hamburger"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>
    );
}

export default Header;