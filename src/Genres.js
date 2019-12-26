import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Genres = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const removeGenre = id => {
        axios
            .delete(`/api/genres/${ id }`)
            .then(res => {
                const filtered = data.filter(item => item.id !== id)
                setData(filtered)
            })
    }

    const renderLine = record =>{
        return(
            <tr key={ record.id }>
                <th scope='row'>{ record.id }</th>
                <td>{ record.name }</td>
                <td>
                    <Link
                        className='btn btn-success btn-sm mr-2'
                        to={ `/genres/${ record.id }` }
                    >
                        Update
                    </Link>
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={ () => removeGenre(record.id) }
                    >
                        Remove
                    </button>
                </td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <div className='container'>
                <h2 className='mt-4'>Genres</h2>
                <div className='alert alert-danger' role='alert'>
                    You have no created genres!
                </div>
            </div>
        )
    }

    return(
        <div className='container'>
            <h2 className='mt-4'>Genres</h2>
            <Link className='btn btn-outline-primary' to='/genres/new'>New Genre</Link>
            <section className='mt-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(renderLine)
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Genres
