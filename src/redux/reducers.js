import { ADD_DISLIKE_BY_CURRENT_USER, ADD_LIKE_BY_CURRENT_USER, DELETE_A_MOVIE, GET_ALL_MOVIES_FAIL, GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS } from "./constants"



export const allMoviesReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES_REQUEST:
            return { loading: true }

        case GET_ALL_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }

        case GET_ALL_MOVIES_FAIL:
            return { loading: false, error: action.payload }

        case ADD_LIKE_BY_CURRENT_USER:
            return {
                ...state,
                loading: false,
                movies: state.movies.map(movie => {
                    if (movie.id === action.payload.id && action.payload.firstLike) {
                        console.log("check id")
                        return { ...movie, likes: movie.likes + 1 }
                    } else if (movie.id === action.payload.id && !action.payload.firstLike) {
                        return { ...movie, likes: movie.likes + 1, dislikes: movie.dislikes - 1 }
                    }
                    return movie
                })
            }

        case ADD_DISLIKE_BY_CURRENT_USER:
            return {
                ...state,
                loading: false,
                movies: state.movies.map(movie => {
                    if (movie.id === action.payload.id) {
                        console.log("check id")
                        return { ...movie, likes: movie.likes - 1, dislikes: movie.dislikes + 1 }
                    }
                    return movie
                })
            }

        case DELETE_A_MOVIE:
            return {
                ...state,
                loading:false,
                movies : state.movies.filter(movie => movie.id !== action.payload)
            }

        default:
            return state
    }
}
