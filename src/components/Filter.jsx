import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import "./Filter.scss"
const Filter = ({ movies, filterByCat }) => {
    const [categories, setCategories] = useState([]);
    const [openDropDown, setOpenDropDown] = useState(false);

    const sortByCat = (cat) => {
        filterByCat(cat)
    }


    useEffect(() => {
        const categoriesList = new Set([...movies].map(x => x.category))
        console.log(categoriesList)
        setCategories([...categoriesList])
    }, [movies])

    return (
        <div class="dropdown" onClick={() => setOpenDropDown(!openDropDown)}>
            <h4>
                <FontAwesomeIcon icon={faFilter} /> {" "}
                <span>Filter by category</span>
            </h4>
            <ul style={{ display: openDropDown ? "flex" : "none" }}>
                <li onClick={() => sortByCat("all")}>All movies</li>
                {categories.map(cat => (
                    <li key={cat.id} onClick={() => sortByCat(cat)}>{cat}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
