import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const UpdateGenre = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
            .get(`/api/genres/${ match.params.id }`)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id])

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const modify = () => {
        axios
            .put(`/api/genres/${ match.params.id }`, { name })
            .then(res => {
                setSuccess(true)
            })
    }

    if(success){
        return <Redirect to='/genres' />
    }

    return(
        <div className='container'>
            <h2 className='mt-4'>Update Genre</h2>
            <section className='mt-4'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            className='form-control'
                            type='text'
                            id='name'
                            value={ name }
                            onChange={ handleInputChange }
                            placeholder='Genre Name'
                        />
                    </div>
                    <button
                        className='btn btn-outline-success'
                        type='button'
                        onClick={ modify }
                    >
                        Update Genre
                    </button>
                </form>
            </section>
        </div>
    )
}

export default UpdateGenre
