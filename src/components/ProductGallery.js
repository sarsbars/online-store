function productGallery(props) {
    return (
        <div>
            {props.list.map(movie => (
                <div key={movie.id}>
                    <div className='poster-img'>
                        <img src={movie.poster} className='Movie-poster'/>
                    </div>
                    <p>{movie.title}</p>
                </div>
            ))}
        </div>
    );
}

export default productGallery;