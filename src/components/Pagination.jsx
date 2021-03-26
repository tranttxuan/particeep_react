import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./Pagination.scss"


const Pagination = ({ postsPerPage, totalMovies, paginate }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrevbtn = () => {
        if (currentPage === 1) {
            setCurrentPage(1)
            paginate(1)
        } else {
            setCurrentPage(pre => pre - 1)
            paginate(currentPage - 1)
        }
    }
    const handleNextbtn = () => {
        if (currentPage === pageNumbers[pageNumbers.length-1]) {
            setCurrentPage(pageNumbers[pageNumbers.length-1])
            paginate(pageNumbers[pageNumbers.length-1])
        } else {
            setCurrentPage(pre => pre + 1)
            paginate(currentPage + 1)
        }
    }

    return (
        <div>
            <ul className='pagination'>

                <li>
                    <button onClick={handlePrevbtn}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={currentPage.toString() === number.toString() && "current-page"}>
                        <button onClick={() => { paginate(number); setCurrentPage(number) }} >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button onClick={handleNextbtn}>
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default Pagination
