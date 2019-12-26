import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewGenre = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const store = () => {
        axios
            .post('/api/genres', { name })
            .then(res => {
                setSuccess(true)
            })
    }

    if(success){
        return <Redirect to='/genres' />
    }

    return(
        <div className='container'>
            <h2 className='mt-4'>New Genre</h2>
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
                        className='btn btn-outline-primary'
                        type='button'
                        onClick={ store }
                    >
                        Save Genre
                    </button>
                </form>
            </section>
        </div>
    )
}

export default NewGenre
