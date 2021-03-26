import React from 'react'
import Movie from './Movie'
import "./ListMovies.scss"
import FlipMove from "react-flip-move"

const ListMovies = ({ movies }) => {
    console.log(movies)
    return (
        <FlipMove className="movies__grid">
            {movies.map(({ id, title, category, likes, dislikes }, i) => (
                <div key={i}>
                    <Movie id={id} title={title} category={category} likes={likes} dislikes={dislikes} />
                </div>
            ))}
        </FlipMove>


    )
}

export default ListMovies
