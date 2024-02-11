import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/backButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'


const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBook = () =>{
        setLoading(true);
        axios.delete(`http://localhost:5555/api/v1/books/${id}`).then(() =>{
            setLoading(false);
            enqueueSnackbar('Deleted Successfully', {variant: 'success'})
            navigate('/');
        }).catch((err) =>{
            setLoading(false);
            enqueueSnackbar('Error', {variant:'error'})
            alert('An error happened. Please check console');
            console.log(err);
        });
    }
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4 '>Delete Book</h1>
        {loading ? (<Spinner/>): ''}
        <div className='flex flex-col w-[600px] p-8 items-center border-2 border-sky-400 rounded-xl mx-auto'>
            <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>

            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                Yes, Delete this
            </button>

        </div>
    </div>
  )
}

export default DeleteBooks