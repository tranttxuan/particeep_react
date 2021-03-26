import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./Pagination.scss"

const allOptions = [4, 8, 12]

const NumberMoviePerPage = ({ paginate, totalMovies }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const options = []
    for (let option of allOptions) {
        options.push(option)
        if (option >= totalMovies) {
            break
        }
    }

    const handlePrevbtn = () => {
        if (currentPage == 0) {
            setCurrentPage(0)
            paginate(options[0])
        } else {
            setCurrentPage(pre => pre - 1)
            paginate(options(currentPage - 1))
        }
    }
    const handleNextbtn = () => {
        if (currentPage === options.length - 1) {
            setCurrentPage(options.length - 1)
            paginate(options[options.length - 1])
        } else {
            setCurrentPage(pre => pre + 1)
            paginate(options(currentPage + 1))
        }
    }
    return (
        <ul className='pagination'>

            <li>
                <button onClick={handlePrevbtn}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
            </li>
            {options.map((number, i) => (
                <li key={number} className={options[currentPage].toString() === number.toString() && "current-page"}>
                    <button onClick={() => { paginate(number); setCurrentPage(i) }} >
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
    )
}

export default NumberMoviePerPage
