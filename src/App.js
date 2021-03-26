import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from "./redux/actions"
import ListMovies from './components/ListMovies';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import NumberMoviePerPage from './components/NumberMoviePerPage';


function App() {
  const dispatch = useDispatch()
  const allMovies = useSelector(state => state.allMovies);
  const { loading, movies, error } = allMovies;
  const [filterValue, setFilterValue] = useState('all');

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviePerPage] = useState(4)

  useEffect(() => {
    dispatch(getAllMovies(filterValue))
  }, [filterValue]);


  const filterByCat = (cat) => {
    console.log("check in app", cat)
    setFilterValue(cat)
  }

  // we dont fetch data from api with query so I just filter data from redux 
  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);



  const paginate = pageNumber => setCurrentPage(pageNumber);
  const paginateNumberMoviePerPage = pageNumber => setMoviePerPage(pageNumber);
  return (
    <div className="home__container">
      <h1>Enjoy movies!</h1>

      {loading
        ? <div>
          <FontAwesomeIcon icon={faSpinner} />
          <span>Loading ....</span>
        </div>
        : error
          ? <div>{error}</div>
          : <>
            <Filter movies={movies} filterByCat={filterByCat} />
            <ListMovies movies={currentMovies} />
            {/* <Pagination
              postsPerPage={moviesPerPage}
              totalMovies={movies.length}
              paginate={paginate}
            /> */}
            <NumberMoviePerPage
              paginate={paginateNumberMoviePerPage}
              totalMovies={movies.length}
            />
          </>


      }
    </div>
  );
}

export default App;
