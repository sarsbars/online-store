function Header() {
    return (
        <header>
            <div className="container flex space-between">
                <div className="title flex">
                    <h1>FurniSure</h1>
                    <div className="flex center search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <nav className="flex gap-80 align-items">
                    <ul className="nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">BestSellers</a></li>
                    </ul>
                    <a href="index.html" class="logout">Logout</a>
                </nav>
                <button className="hamburger"><i class="fa-solid fa-bars"></i></button>
            </div>
        </header>
    );
}

export default Header;