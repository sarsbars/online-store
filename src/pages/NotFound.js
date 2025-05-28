function NotFound() {
    return (
        <section className='error-message column-direction center container flex'>
            <h2 className='not-found'>404 Not Found </h2>
              <p classname='couldnt-find'>
                We're sorry, the page you are looking for cannot be found.
              </p>
              <button className='back-home'>Back to Home</button>
        </section>
    );
}

export default NotFound;