import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDislike, addLike, deleteMovie } from '../redux/actions';
import "./Movie.scss"

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

const Movie = ({ id, title, category, likes, dislikes }) => {
    // const { id, title, category, likes, dislikes } = movie
    const [imageUrl, setImageUrl] = useState('');
    const [firstLike, setFirstLike] = useState(true)
    const [like, setLike] = useState(false)
    const dispatch = useDispatch();

    const getNewImageUrl = (ev) => {
        // if randomId is not in list of photo ids 
        //get other id
        ev.target.src = getRandomImageUrl();
    }

    const handleLikeButton = (idMovie) => {
        if (like === true) dispatch(addDislike(id, firstLike))
        else dispatch(addLike(id, firstLike))
        setLike(!like);
        setFirstLike(false);
    }

    const handleRemoveButton = (id) => {
        dispatch(deleteMovie(id))
    }

    return (
        <div className="movie">
            <img className="movie__image" src={imageUrl} onError={getNewImageUrl} />
            <div className="movie__content">

                <h1 movie__title>{title}</h1>
                <p movie__category>{category}</p>
                <div>
                    <p><FontAwesomeIcon icon={faThumbsUp} style={{ color: (like && !firstLike) && 'yellow' }} /> <span>{likes}</span> </p>
                    <p><FontAwesomeIcon icon={faThumbsDown} style={{ color: (!like && !firstLike) && 'yellow' }} /> <span>{dislikes}</span> </p>
                </div>
            </div>
            <div className="movie__actions">
                <button onClick={() => handleRemoveButton(id)}>Remove</button>
                <button
                    className={like && "like"}
                    onClick={() => handleLikeButton(id)}>
                    <FontAwesomeIcon icon={like ? faThumbsUp : faThumbsDown} />
                </button>
            </div>
        </div>
    )
}

export default Movie
