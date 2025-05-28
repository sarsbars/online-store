import { NavLink } from 'react-router-dom';


function NotFound() {
    return (
        <section className='error-message column-direction center container flex'>
            <h2 className='not-found'>404 Not Found </h2>
              <p className='couldnt-find'>
                We're sorry, the page you are looking for cannot be found.
              </p>
              <NavLink className='back-home' to='/'>
                Back to Home
            </NavLink>
        </section>
    );
}

export default NotFound;

//NEED TO ADD LINK BACK TO HOME