import axios from "axios";
import { movies$ } from "../movies";
import { ADD_DISLIKE_BY_CURRENT_USER, ADD_LIKE_BY_CURRENT_USER, DELETE_A_MOVIE, GET_ALL_MOVIES_FAIL, GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS } from "./constants";


export const getAllMovies = ( filter) => async (dispatch) => {
    dispatch({
        type: GET_ALL_MOVIES_REQUEST
    })

    try {
        const movies = await movies$
        const filteredMovies = filter === "all" ? movies : movies.filter(movie => movie.category === filter)
        dispatch({
            type: GET_ALL_MOVIES_SUCCESS,
            payload:  filteredMovies
        })

    } catch (err) {
        dispatch({
            type: GET_ALL_MOVIES_FAIL,
            payload: err.message
        })
    }

}

export const addLike = (id, firstLike) => (dispatch) => {
    // in this exercise, simply change details in redux store
    // not send any request patch or put to API to change origin data 
    dispatch({
        type: ADD_LIKE_BY_CURRENT_USER,
        payload: { id, firstLike }
    })
}

export const addDislike = (id, firstLike) => (dispatch) => {
    dispatch({
        type: ADD_DISLIKE_BY_CURRENT_USER,
        payload: { id, firstLike }
    })
}

export const deleteMovie = (id) => (dispatch) => {
    dispatch({
        type: DELETE_A_MOVIE,
        payload: id
    })
}