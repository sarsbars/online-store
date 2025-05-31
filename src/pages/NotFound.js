import { NavLink } from 'react-router-dom';
import { FaFrown } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="container center left">
      <section className="error-message flex column-direction center">
        <h2 className="not-found">404 Not Found</h2>
        <FaFrown className="frown-icon" />
        <p className="couldnt-find">
          We're sorry, the page you are looking for cannot be found.
        </p>
        <NavLink className="back-home" to="/">
          Back to Home
        </NavLink>
      </section>
    </div>
  );
}

export default NotFound;